"use client";

import React from "react";
import { FaSearch, FaQuestionCircle } from "react-icons/fa"; 
import Link from "next/link"; 


export const ChoiceModal = ({ onClose }) => {
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

        <div className="flex flex-col items-center">
          {/* Browsing Option */}
          <Link 
            href="/our-pets" 
            className="border border-gray-300 rounded-lg p-4 mb-4 flex flex-col items-center w-full cursor-pointer hover:shadow-lg text-center"
            onClick={onClose} // Close modal 
          >
            <FaSearch className="text-4xl mb-2 text-gray-600" /> {/* Search icon */}
            <span>Browse</span>
          </Link>

          {/* Decide for Me Option */}
          <Link 
            href="/questionnaire" 
            className="border border-gray-300 rounded-lg p-4 mb-4 flex flex-col items-center w-full cursor-pointer hover:shadow-lg text-center"
            onClick={onClose} 
          >
            <FaQuestionCircle className="text-4xl mb-2 text-gray-600" /> {/* Question mark icon */}
            <span>Decide for Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};