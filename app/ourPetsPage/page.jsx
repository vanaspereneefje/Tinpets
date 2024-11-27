import PetCard from "@/components/PetCard";
import animals from "@/public/pets.json";

function OurPetsPage () {
    const dogCards = animals.animals.dogs;
    const catCards = animals.animals.cats;
    const birdCards = animals.animals.birds;
    return (
        <>
            {dogCards.map((petCard, index) => (
                <PetCard key={index} petCard={petCard} index={index}/>
            ))}
            {catCards.map((petCard, index) => (
                <PetCard key={index} petCard={petCard} index={index}/>
            ))}
            {birdCards.map((petCard, index) => (
                <PetCard key={index} petCard={petCard} index={index}/>
            ))}
        </>

    )
}

export default OurPetsPage;