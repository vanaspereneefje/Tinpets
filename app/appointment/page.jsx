"use client";

import React, { useState, useCallback } from 'react';
import { Calendar } from "@/components/ui/calendar";
import AppointmentModal from '@/components/AppointmentModal';

const TIME_SLOTS = [
  '9:00-10:00',
  '10:00-11:00',
  '11:00-12:00',
  '14:00-15:00',
  '15:00-16:00',
  '16:00-17:00',
];

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [availableSlots, setAvailableSlots] = useState({});

  const generateAvailableSlots = useCallback((date) => {
    const dateString = date.toDateString();
    if (!availableSlots[dateString]) {
      const slots = TIME_SLOTS.filter(() => Math.random() > 0.5);
      setAvailableSlots(prev => ({ ...prev, [dateString]: slots }));
    }
  }, [availableSlots]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    generateAvailableSlots(date);
    setTimeout(() => {
      setShowModal(true);
    }, 0);
  };

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Select a Date</h2>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="rounded-md border"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
        <p className="mb-4">Here you can check the best time to meet your matched pet.</p>
        {showModal && (
          <AppointmentModal
            date={selectedDate}
            onClose={() => setShowModal(false)}
            availableSlots={availableSlots[selectedDate.toDateString()] || []}
          />
        )}
      </div>
    </div>
  );
}