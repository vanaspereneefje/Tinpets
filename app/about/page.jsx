"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center p-4">
      
      <nav className="mb-8">
        <button onClick={() => router.back()} className='hover:underline'>Go Back</button>
      </nav>
      
      <h1 className="text-4xl font-bold mb-6 text-customBrown">About TINPET</h1>
      
      
      <div className="mb-6">
        <Image src="/about-img.jpg" alt="About TINPET" width={800} height={300} className="rounded-md shadow-xl " />
      </div>
      
     
      <p className="text-lg text-center max-w-prose italic">
        TINPET is a dedicated platform designed to connect individuals with homeless pets in need of loving homes. Our mission is to streamline the adoption process by helping you find the perfect match with a furry companion. 
        <br /><br />
        By answering a few simple questions, we analyze your preferences and lifestyle to suggest pets that would fit perfectly with you. Whether you are looking for a playful dog, a cuddly cat, or a charming bird, TINPET makes it easier than ever to make a difference in an animal&apos;s life.
        <br /><br />
        Join us in giving a second chance to pets in need, and experience the joy and companionship of adopting a new friend!
      </p>
    </div>
  );
};

export default AboutPage;