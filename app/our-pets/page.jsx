import PetCard from "@/components/PetCard";
import { headers } from "next/headers";

export default async function OurPetsPage() {

    async function getCards() {
        const headersList = await headers(); 
        
        try {
    
            const response = await fetch('http://localhost:3001/api/v1/pets/get-all', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    ...(headersList.get('cookie') ? { Cookie: headersList.get('cookie') } : {}),
                },
            });

            if (!response.ok) {
                console.log('Failed to fetch pets data');
            }
    
            const data = await response.json();
            console.log(data)
    
            return data;
        } catch (error) {
            console.log('Error fetching pets data:', error);
            return "Error fetching pets data."
        }
    }

    const petsData = await getCards();

    const dogCards = petsData
        .filter(pet => pet.species === "Dog")
        .map(pet => (
            <PetCard key={pet.id} petCard={pet} />
        ));

    const catCards = petsData
        .filter(pet => pet.species === "Cat")
        .map(pet => (
            <PetCard key={pet.id} petCard={pet} />
        ));

    const birdCards = petsData
        .filter(pet => pet.species === "Bird")
        .map(pet => (
            <PetCard key={pet.id} petCard={pet} />
        ));

    const fishCards = petsData
        .filter(pet => pet.species === "Fish")
        .map(pet => (
            <PetCard key={pet.id} petCard={pet} />
        ));

    return (
        <>
            <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Dogs</h1>
            <div className="flex flex-wrap justify-center gap-5">
                {dogCards}
            </div>

            <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Cats</h1>
            <div className="flex flex-wrap justify-center gap-5">
                {catCards}
            </div>

            <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Birds</h1>
            <div className="flex flex-wrap justify-center gap-5">
                {birdCards}
            </div>

            <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Fishes</h1>
            <div className="flex flex-wrap justify-center gap-5">
                {fishCards}
            </div>
        </>
    );
}
