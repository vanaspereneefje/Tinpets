import animals from "@/public/pets.json" assert { type: 'json' };
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
console.log(animals);

function PetCard () {
    const petPicture = animals.animals.dogs[0].picture;
    const petName = animals.animals.dogs[0].name;
    return (
        <>
        <Card>
            <Image src={petPicture} alt="pet image" width={200} height={200} className="mt-5"/>
            <CardHeader>
                <CardTitle>{petName}</CardTitle>
            </CardHeader>
        </Card>
        </>
    )
}

export default PetCard;
