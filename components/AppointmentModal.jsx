'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function AppointmentModal({ date, onClose, availableSlots }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleConfirm = () => {
    if (selectedTime) {
      alert(`We look forward to meet you on ${date.toDateString()} at ${selectedTime} 😻`);
      onClose();
    } else {
      alert("Please select a time slot before confirming.");
    }
  };

  const handleCancel = () => {
    alert("Your appointment is canceled. 😿");
    onClose();
  };

  const isAvailable = (slot) => {
    return availableSlots.includes(slot);
  };

  return (
    
    <div className='fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg max-w-md w-full'>
        <h3 className='text-xl font-bold mb-4'>Select a Time Slot</h3>
        <p className='mb-4'>Date: {date.toDateString()}</p>
        <div className='grid grid-cols-2 gap-2 mb-4'>
          {availableSlots.length > 0 ? (
            availableSlots.map((slot) => (
              <Button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                variant={selectedTime === slot ? "default" : "outline"}
                className={`${
                  selectedTime === slot
                    ? isAvailable(slot)
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                {slot}
              </Button>
            ))
          ) : (
            <p>Loading available time slots...</p>
          )}
        </div>
        <div className='flex justify-end space-x-2'>
          <Button onClick={handleCancel} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}