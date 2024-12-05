import Image from "next/image";
import animals from "@/public/pets.json";
import { Button } from "@/components/ui/button";

function Pet ({ petCard }) {
    const petPicture = petCard.picture;
    const petName = petCard.name;
    const index = 1;

    return (
        <>
        <div className="relative left-1/2 mb-[100px] translate-x-[-200px]">
            <div className="bg-orange-100 w-[450px] flex flex-col items-center rounded-xl">
                <div className="flex flex-col items-center">
                    <Image src={petPicture} alt="pet image" width={400} height={400} className="mt-5 rounded-xl"/>
                </div>
                <div className="text-center m-[20px]">
                    <h1 className="text-3xl">{petName}</h1>
                </div>
                <div className="flex flex-col w-[400px] gap-[20px] mb-[20px]">
                    <p><strong>age:</strong> {animals.animals.dogs[index].age}</p>
                    <p><strong>personality type:</strong> {animals.animals.dogs[index].personalityType}</p>
                    <p><strong>cat friendly:</strong> {animals.animals.dogs[index].catfriendly ? "yes" : "no"}</p>
                    <p><strong>dog friendly:</strong> {animals.animals.dogs[index].dogfriendly ? "yes" : "no"}</p>
                    <p><strong>kid friendly:</strong> {animals.animals.dogs[index].kidfriendly ? "yes" : "no"}</p>
                </div>
                <Button variant="outline" className="mb-[20px] mt-[20px] text-2xl"><strong>Adopt me!</strong></Button>
            </div>
        </div>
        </>
    )
}

export default Pet;