import Image from "next/image";
import {
    Card,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function PetCard ({ petCard }) {
    const petPicture = petCard.picture;
    const petName = petCard.name;
    return (
        <>
        <Card className="hover:scale-110 transition duration-150 ease-in-out">
        <div className="relative w-[200px] h-[200px]"> 
            <Image src={petPicture} alt="pet image" layout="fill" objectFit="cover" className="mt-5 rounded-t-lg "/>
            </div>
            <CardHeader>
                <CardTitle>{petName}</CardTitle>
            </CardHeader>
        </Card>
        </>
    )
}

export default PetCard;
