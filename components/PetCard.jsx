import Image from "next/image";
import {
    Card,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button";
import { useState } from "react";
import PetModal from "./PetModal";

function PetCard ({ petCard }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null);

    const handleSeeMore = () => {
        setSelectedPet(petCard);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPet(null);
    }

    return (
        <>
            <Card className="hover:scale-110 transition duration-150 ease-in-out">
                <div className="relative w-[200px] h-[200px]">
                    <Image
                        src={petCard.picture}
                        alt="pet image"
                        layout="fill"
                        objectFit="cover"
                        className="mt-5 rounded-t-lg"
                        loading="lazy"
                    />
                </div>
                <CardHeader>
                    <CardTitle>{petCard.name}</CardTitle>
                </CardHeader>
                <Button className="mb-3" onClick={handleSeeMore}>
                    See more
                </Button>
            </Card>

            {isModalOpen && (
                <PetModal
                    pet={selectedPet}
                    onClose={closeModal}
                />
            )}
        </>
    )
}

export default PetCard;
