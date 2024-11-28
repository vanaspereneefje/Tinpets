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
            <Image src={petPicture} alt="pet image" width={200} height={200} className="mt-5"/>
            <CardHeader>
                <CardTitle>{petName}</CardTitle>
            </CardHeader>
        </Card>
        </>
    )
}

export default PetCard;
