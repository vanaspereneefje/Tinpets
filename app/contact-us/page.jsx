'use client';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const  ContactPage=()=>{
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <nav className="mb-8">
        <button onClick={() => router.back()} className='hover:underline'>Go Back</button>
      </nav>
      <h1 className='text-4xl font-bold mb-6'>Contact Us</h1>
      <Accordion type="single" collapsible className='w-full max-w-xl'>
          <AccordionItem value="item-1">
              <AccordionTrigger>
                What is TINPET?
              </AccordionTrigger>
              <AccordionContent>
              TINPET is a platform dedicated to helping people find and adopt pets that are in need of a loving home. We connect potential adopters with animals by providing a matching service based on user preferences.
              </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I adopt a pet?
              </AccordionTrigger>
              <AccordionContent>
              To adopt a pet, visit our website and fill out the questionnaire to get matched with your ideal pet. After your match is determined, you can make an appointment for a meeting.
              </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
              <AccordionTrigger>What types of pets are available for adoption?</AccordionTrigger>
              <AccordionContent>
                We feature various pets, including dogs, cats, and small animals. Check our website regularly for the latest pet listings available for adoption.
              </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
              <AccordionTrigger>Do you have a physical location?</AccordionTrigger>
              <AccordionContent>
                Yes, TINPET has a shelter located at 1234 Pet Lane, Gent, Belgium. We welcome visitors to meet the pets and learn more about the adoption process.
              </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
              <AccordionTrigger>How can I contact you?</AccordionTrigger>
              <AccordionContent>
                You can reach us via email at <a href="mailto:info@tinpet.com" className="text-blue-500">info@tinpet.com</a>, or call us at <strong>(123) 456-7890</strong>.<br/>
                Would you like to make an appointment? Choose a date <Link href="/appointment" className="font-semibold underline">here</Link>
              </AccordionContent>
        </AccordionItem>

      </Accordion>

      <div className="mt-6 text-lg text-center">
        <p>If you have any further questions, don&apos;t hesitate to contact us!</p>
      </div>
    </div>
  );
};
export default ContactPage;

