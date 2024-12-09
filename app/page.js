"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { ChoiceModal } from "@/components/ChoiceModal";

function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const bttnText = "Let's get matched!";

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const navigateTo = (path) => {
    closeModal(); 
    router.push(path);
  };

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <video
          className="absolute min-w-full min-h-full w-auto h-auto right-0 bottom-0 object-cover"
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src="women_dogs.mp4" type="video/mp4"></source>
        </video>
        <div className="relative flex flex-col justify-center items-center text-center h-full z-10 text-white">
          <h1 className="text-5xl m-[20px] font-lilita ">Looking for your dream pet?</h1>
          <h2 className="text-3xl m-[20px]">Do not look any further!</h2>
          <Button onClick={openModal} className="m-[50px] text-2xl p-[25px] bg-customBrown hover:bg-customDarkBrown">
            {bttnText}
          </Button>
          <p className="text-xl">
            Fill in our questionnaire to get matched with the pet of your dreams.
          </p>
        </div>
      </div>

      {/* Only show the modal when requested */}
      {showModal && (
        <ChoiceModal onClose={closeModal} />
      )}
    </>
  );
}

export default LandingPage;