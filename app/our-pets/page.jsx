"use client";

import React, { useState, useEffect } from 'react';
import PetCard from "@/components/PetCard";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

export default function OurPetsPage() {
    const [selectedSpecies, setSelectedSpecies] = useState("All");
    const [petsData, setPetData] = useState([]);// State to store the fetched pets data
    const [loading, setLoading] = useState(true);//To mange loading state

    useEffect(() => {
        const fetchCards = async () => {
            setLoading(true); //start loading
            try {
                const response = await fetch('http://localhost:3001/api/v1/pets/get-all', {
                    method: "GET",
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch pets data')
                }
                const data = await response.json();
                setPetData(data); //update petsData with fetched data
            } catch (error) {
                console.log('Error fetching pets data:', error);
            } finally {
                setLoading(false);// end loading
            }
        };

        fetchCards();
    }, []);

    //Filter the pets based on selected species
    const filteredPets = selectedSpecies === "All"
        ? petsData
        : petsData.filter(pet => pet.species === selectedSpecies);

    return (
        <>
            {/* Pet species filter using Select component */}
            <div className="flex justify-center mb-5 mt-10">
                <Select onValueChange={setSelectedSpecies} value={selectedSpecies}>
                    <SelectTrigger className="w-[180px] bg-gray-50">
                        <SelectValue placeholder="Select Pet Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All" >All Pets</SelectItem>
                        <SelectItem value="Dog">Dogs</SelectItem>
                        <SelectItem value="Cat">Cats</SelectItem>
                        <SelectItem value="Bird">Birds</SelectItem>
                        <SelectItem value="Fish">Fishes</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Loading and Pet Cards display */}
            {loading ? (
                <p className="text-center">Loading pets...</p>
            ) : (
                <>
                    <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Category: {selectedSpecies}</h1>
                    <div className="flex flex-wrap justify-center gap-5">
                        {filteredPets.map(pet => (
                            <PetCard key={pet.id} petCard={pet} />
                        ))}
                    </div>
                </>
            )}
        </>
    );

}
