"use client";

import React from "react";
import { FaSearch, FaQuestionCircle } from "react-icons/fa"; 
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'; 
export const ChoiceModal = ({ onClose }) => {
  const router = useRouter(); 

  // Navigate to the specified path, using Next.js router
  const navigateTo = (path) => {
    // console.log("Navigate to:", path);
    onClose(); 
    router.push(path); // Use router to change the page
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg relative max-w-md mx-auto shadow-lg">
        <button
          className="absolute top-2 right-2 font-bold text-red-600 hover:text-red-800"
          onClick={onClose}
        >
          &times; 
        </button>

        <h2 className="text-xl text-center mb-4">Choose Your Experience 🐶</h2>

        <div className="flex flex-col items-center ">
          {/* Browsing option */}
          <div className="border border-gray-300 rounded-lg p-4 mb-4 flex flex-col items-center w-full">
            <FaSearch className="text-4xl mb-2 text-gray-600" /> 
            <Button
              onClick={() => navigateTo('/our-pets')}
              variant="primary"
              className="w-full text-center  bg-gray-400 hover:bg-gray-700"
            >
              Browse
            </Button>
          </div>

          {/* Decide for me option */}
          <div className="border border-gray-300 rounded-lg p-4 mb-4 flex flex-col items-center w-full">
            <FaQuestionCircle className="text-4xl mb-2 text-gray-600" /> 
            <Button
              onClick={() => navigateTo('/questionnaire')}
              variant="primary"
              className="w-full text-center bg-gray-400 hover:bg-gray-700"
            >
              Decide for Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};