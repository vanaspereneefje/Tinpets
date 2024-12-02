import PetCard from "@/components/PetCard";
import PetPageUI from "@/components/Pet";
import animals from "@/public/pets.json";

function petPage () {
    //TODO: Add the right pet in here
    const selectedCard = animals.animals.dogs[0];
    const CardIndex = 1;

    return (
        <>
        <div key={CardIndex}>
            <PetPageUI petCard={selectedCard} index={CardIndex} />
        </div>
        </>
    )
}

export default petPage;