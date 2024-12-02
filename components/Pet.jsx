import Image from "next/image";
import animals from "@/public/pets.json";

function PetPageUI ({ petCard }) {
    const petPicture = petCard.picture;
    const petName = petCard.name;
    const index = 1;

    return (
        <>
        <div className="flex flex-col items-center text-center">
            <Image src={petPicture} alt="pet image" width={200} height={200} className="mt-5"/>
            <h1 className="text-3xl">{petName}</h1>
            <p>age: {animals.animals.dogs[index].age}</p>
            <p>personality type: {animals.animals.dogs[index].personalityType}</p>
            <p>cat friendly: {animals.animals.dogs[index].catfriendly ? "yes" : "no"}</p>
            <p>dog friendly: {animals.animals.dogs[index].dogfriendly ? "yes" : "no"}</p>
            <p>kid friendly: {animals.animals.dogs[index].kidfriendly ? "yes" : "no"}</p>
        </div>
        </>
    )
}

export default PetPageUI;