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

 
};