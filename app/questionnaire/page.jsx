"use client";

import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; 
import { Button } from "@/components/ui/button"; 

const questions = [
  {
    id: 1,
    question: "Do you have kids?",
    options: ["Yes, young kids", "Yes, older kids", "No kids"]
  },
  {
    id: 2,
    question: "Do you have other pets?",
    options: ["Dogs", "Cats", "No other pets"]
  },
  {
    id: 3,
    question: "How big is your house?",
    options: ["Small", "Medium", "Large"]
  },
  {
    id: 4,
    question: "How often do you exercise?",
    options: ["Daily", "Weekly", "Rarely"]
  },
  {
    id: 5,
    question: "Do you travel often?",
    options: ["Yes", "Sometimes", "No"]
  },
  {
    id: 6,
    question: "Do you prefer indoor or outdoor activities?",
    options: ["Indoor", "Outdoor", "Both"]
  },
  {
    id: 7,
    question: "What's your experience with pets?",
    options: ["A lot", "Some", "None"]
  },
  {
    id: 8,
    question: "How would you describe your lifestyle?",
    options: ["Active", "Moderate", "Sedentary"]
  },
  {
    id: 9,
    question: "Do you have allergies to pets?",
    options: ["Yes, cats", "Yes, dogs", "No allergies"]
  },
  {
    id: 10,
    question: "Do you have a garden?",
    options: ["Yes", "No", "Planning to get one"]
  },
  {
    id: 11,
    question: "How much time can you dedicate to a pet daily?",
    options: ["A few hours", "Half a day", "All day"]
  },
  {
    id: 12,
    question: "Do you prefer a quiet or lively environment?",
    options: ["Quiet", "Lively", "Depends on mood"]
  },
  {
    id: 13,
    question: "Are you looking for a specific pet species?",
    options: ["Dog", "Cat", "Open to any"]
  },
  {
    id: 14,
    question: "What size pet would you prefer?",
    options: ["Small", "Medium", "Large"]
  },
  {
    id: 15,
    question: "How important is pet grooming to you?",
    options: ["Very important", "Somewhat important", "Not important"]
  }
];

function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionChange = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option; // Update the answer for the current question
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
    const allAnswered = !answers.includes(null); // Check if all questions are answered
    if (!allAnswered) {
      alert("Please answer all questions before submitting!");
      return;
    }
    
    localStorage.setItem('questionnaireAnswers', JSON.stringify(answers)); // Save answers to local storage
    // console.log("Saved answers:", answers); 
    alert("Your answers have been submitted!");
  };
  
}

export default Questionnaire;