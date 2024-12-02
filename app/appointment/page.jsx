"use client";

import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import AppointmentModal from '@/components/AppointmentModal';

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [availableSlots, setAvailableSlots] = useState({});
  const [loading, setLoading] = useState(true);

  // Load available slots from the JSON file
  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const response = await fetch('/appointments.json');
        const data = await response.json();
        console.log("Appointments loaded:", data); 
        setAvailableSlots(data);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleDateSelect = (date) => {
    if (date) {
        const formattedDate = date.toISOString().split('T')[0]; // Ensure date format is 'YYYY-MM-DD'
        console.log("Selected date:", formattedDate); 
        const dayOfWeek =date.getDay();
        if(dayOfWeek === 0 || dayOfWeek === 6){
          alert ("Sorry we don't work on weekends.");
          return;
        }

        // Only show the modal if slots are available for the selected date
        if (availableSlots[formattedDate]) {
            setSelectedDate(date);
            setShowModal(true);
        } else {
          alert(" Sorry no available slots for this date ")
            console.log("No available slots for this date."); 
        }
    } else {
        console.log("Date is undefined."); 
    }
};

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 mt-0">Make an Appointment</h1>
      <p className="mb-8 italic">Here you can create an appointment to meet your matched pet.</p>
      <h2 className="text-2xl font-bold mb-4">Select a Date</h2>
      <div className="mb-8 relative">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="rounded-md border"
        />
      </div>
      {showModal && (
        <AppointmentModal
          date={selectedDate}
          onClose={() => setShowModal(false)}
          availableSlots={availableSlots[selectedDate.toISOString().split('T')[0]] || []}
        />
      )}
      {loading && <p>Loading available slots...</p>}
    </div>
  );
}