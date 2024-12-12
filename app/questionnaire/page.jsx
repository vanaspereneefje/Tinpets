"use client";

import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const questions = [
  {
    id: 1,
    question: "Are you looking for a specific species?",
    options: [
      { value: "Dog", text: "Dog" },
      { value: "Cat", text: "Cat" },
      { value: "Bird", text: "Bird" },
      { value: "Fish", text: "Fish" },
      { value: "any", text: "No" }
    ]
  },
  {
    id: 2,
    question: "Do you have children or plan to have them in the future?",
    options: [
      { value: false, text: "No" },
      { value: true, text: "Yes" }
    ]
  },
  {
    id: 3,
    question: "How big is your house?",
    options: [
      { value: "Small", text: "Small" },
      { value: "Medium", text: "Medium" },
      { value: "Large", text: "Large" },
      { value: "Apartment", text: "Apartment" }
    ]
  },

  {
    id: 4,
    question: "Do you have experience training pets or would you prefer a pet that's already trained?",
    options: [
      { value: true, text: "Experienced" },
      { value: false, text: "Need training" }
    ]
  },

  {
    id: 5,
    question: "Would you prefer a pet that is calm and relaxed, or one that is more energetic and playful?",
    options: [
      { value: true, text: "Energetic" },
      { value: false, text: "Calm" },
    ]
  },
  {
    id: 6,
    question: "Do you have a garden?",
    options: [
      { value: true, text: "Yes" },
      { value: false, text: "No" }
    ]
  },
  {
    id: 7,
    question: "Are you looking for a pet that is independent or one that requires a lot of attention?",
    options: [
      { value: false, text: "I have a lot of time to spend with my pet" },
      { value: true, text: "I need to dedicate less that 1 hour a day" }
    ]
  },
  {
    id: 8,
    question: "Do you prefer a quiet or lively environment?",
    options: [
      { value: true, text: "Quiet" },
      { value: false, text: "Lively" }
    ]
  },
  {
    id: 9,
    question: "Are you open to adopting a pet that has been neutered, or would you prefer a pet that has not been neutered?",
    options: [
      { value: true, text: "Neutered" },
      { value: false, text: "It does not matter" }
    ]
  },
  {
    id: 10,
    question: "What size of pet would you prefer?",
    options: [
      { value: "Small", text: "Small" },
      { value: "Medium", text: "Medium" },
      { value: "Large", text: "Large" }
    ]
  }
];

function Questionnaire() {
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionChange = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = value; // Update with the value of the selected option
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    if (answers.includes(null)) {
      alert("Please answer all questions before submitting!");
      return;
    }

    const searchBody = {
      searchParams: {
        stats: {
          children: answers[1],
          house: answers[2],
          trained: answers[3],
          energetic: answers[4],
          garden: answers[5],
          independent: answers[6],
          noise: answers[7],
        },
        size: answers[9]
      }
    };

    if (answers[0] === "any") {
    } else {
      searchBody.searchParams.species = answers[0];
    }

    try {
      console.log("Search Params Sent:", searchBody);

      const response = await fetch(`http://localhost:3001/api/v1/pets/find`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ searchParams: searchBody.searchParams }),
      });

      console.log("Response Status:", response.status);

      if (!response || !response.ok) {
        const errorText = await response.text();
        console.log("Failed to fetch pet data. Response Text:", errorText);
        return;
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.foundPets && Array.isArray(data.foundPets) && data.foundPets.length > 0) {
        localStorage.setItem('matchingPets', JSON.stringify(data.foundPets));
        router.push('/matches');
      } else {
        alert("No matching pets found.");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-customBrown">We&apos;re excited to find your perfect pet!</h1>
        <p className="mt-2 text-lg text-gray-800 italic">
          To help us match you with your ideal pet friend, please answer a few fun questions.
          Your answers will guide us in finding the best companion tailored just for you!
        </p>
      </div>

      {questions.length > 0 ? (
        <div className="border border-gray-300 bg-gray-50 rounded-lg p-6 mb-4 w-3/4">
          <h2 className="text-xl mb-4">
            {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
          </h2>
          <RadioGroup
            value={answers[currentQuestionIndex]}
            onValueChange={handleOptionChange}
          >
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <RadioGroupItem value={option.value} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="ml-2">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}

      <div className="flex justify-between w-full px-6">
        <Button onClick={handlePrev} disabled={currentQuestionIndex === 0} className="text-xl" variant="primary">
          &larr; Previous
        </Button>
        {currentQuestionIndex === questions.length - 1 ? (
          <Button onClick={handleSubmit} className="text-xl bg-customBrown hover:bg-customDarkBrown" >
            Submit
          </Button>
        ) : (
          <Button onClick={handleNext} className="text-xl " variant="primary">
            Next &rarr;
          </Button>
        )}
      </div>
    </div>
  );
}

export default Questionnaire;
