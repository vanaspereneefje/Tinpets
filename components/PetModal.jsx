import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "./ui/button";
  import Link from "next/link";
  import Image from "next/image";
  

const PetModal = ({ pet, onClose }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
        <Card className="relative w-[400px] p-5 bg-white rounded-lg ">
            <CardHeader>
                <CardTitle className="text-2xl">{pet.name}</CardTitle>
                <CardDescription>{pet.breed}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative w-[150px] h-[150px] mx-auto mb-3">
                    <Image
                        src={pet.picture}
                        alt={`${pet.name} picture`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        loading="lazy"
                    />
                </div>
                <p><strong>Description:</strong> {pet.description} </p>
                <p><strong>Age:</strong> {pet.age}</p>
                <p><strong>Gender:</strong> {pet.gender}</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Link href="/questionnaire"><Button className="bg-customBrown text-white">Adopt me!</Button></Link>
                <Button onClick={onClose} className="bg-red-500 text-white">
                    Close
                </Button>
            </CardFooter>
        </Card>
    </div>
    )
};

export default PetModal;