"use client";

import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; 
import { Button } from "@/components/ui/button"; 

const questions = [
  {
    id: 1,
    question: "Do you have kids at home?",
    options: [
      { value: false, text: "No " },
      { value: true, text: "Yes" }
    ]
  },
  {
    id: 2,
    question: "Do you have other pets?",
    options: [
      { value: false, text: "No" },
      { value: true, text: "Yes" }
    ]
  },
  {
    id: 3,
    question: "How big is your house?",
    options: [
      { value: "small", text: "Small" },
      { value: "medium", text: "Medium" },
      { value: "large", text: "Large" }
    ]
  },
  
  {
    id: 4,
    question: "What's your experience with pets?",
    options: [
      { value: true, text: "A lot" },
      { value: false, text: "Not much" }
    ]
  },

  {
    id: 5,
    question: "Do you have allergies to pets?",
    options: [
      { value: true, text: "Yes" },
      { value: false, text: "No" }
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
    question: "How much time can you dedicate to a pet daily?",
    options: [
      { value: true, text: "More than an hour" },
      { value: false, text: "Less than an hour" }
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
    question: "Are you looking for a specific pet species?",
    options: [
      { value: "dog", text: "Dog" },
      { value: "cat", text: "Cat" },
      { value: "bird", text: "Bird" },
      { value: "fish", text: "Fish" },
      { value: "any", text: "Any" },
    ]
  },
  {
    id: 10,
    question: "What size pet would you prefer?",
    options: [
      { value: "small", text: "Small" },
      { value: "medium", text: "Medium" },
      { value: "large", text: "Large" }
    ]
  }
];

function Questionnaire() {
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

  const handleSubmit = () => {
    // Check if all questions are answered
    if (answers.includes(null)) {
      alert("Please answer all questions before submitting!");
      return;
    }
    
    localStorage.setItem('questionnaireAnswers', JSON.stringify(answers)); // Save answers to local storage
    // console.log("Saved answers:", answers); 
    alert("Your answers have been submitted!"); 
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
                <RadioGroupItem value={option.text} id={`option-${index}`} /> 
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