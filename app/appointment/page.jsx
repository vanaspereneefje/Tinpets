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
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold mb-4 mt-0">Make an Appointment</h1>
    <p className="mb-8">Here you can create an appointment to meet your matched pet.</p>
    <h2 className="text-2xl font-bold mb-4">Select a Date</h2>
    <div className="mb-8 relative">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={handleDateSelect}
        className="rounded-md border"
        style={{ zIndex: showModal ? 0 : 10 }}  //  ensure it's displayed below modal
      />
    </div>
    {showModal && (
      <AppointmentModal
        date={selectedDate}
        onClose={() => setShowModal(false)}
        availableSlots={availableSlots[selectedDate.toDateString()] || []}
      />
    )}
  </div>
  );
}