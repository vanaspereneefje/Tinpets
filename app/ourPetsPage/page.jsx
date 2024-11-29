import PetCard from "@/components/PetCard";
import animals from "@/public/pets.json";

function OurPetsPage () {
    const dogCards = animals.animals.dogs;
    const catCards = animals.animals.cats;
    const birdCards = animals.animals.birds;
    return (
        <>
            <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Dogs</h1>
            <div className="flex flex-wrap justify-center gap-5">
                {dogCards.map((petCard, index) => (
                    <PetCard key={index} petCard={petCard} index={index}/>
                ))}
            </div>
            <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Cats</h1>
            <div className="flex flex-wrap justify-center gap-5">
            {catCards.map((petCard, index) => (
                <PetCard key={index} petCard={petCard} index={index}/>
            ))}
            </div>
            <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Birds</h1>
            <div className="flex flex-wrap justify-center gap-5">
            {birdCards.map((petCard, index) => (
                <PetCard key={index} petCard={petCard} index={index}/>
            ))}
            </div>
        </>

    )
}

export default OurPetsPage;