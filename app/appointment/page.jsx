"use client";

import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import AppointmentModal from '@/components/AppointmentModal';

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowModal(true);
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
          />
        )}
      </div>
    </div>
  );
}