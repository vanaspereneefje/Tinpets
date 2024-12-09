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
        setSelectedPet(petCard); // Set the pet data for the modal
        setIsModalOpen(true); // Show the modal
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPet(null);
    }
    // const petPicture = petCard.picture;
    // const petName = petCard.name;
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
                    />
                </div>
                <CardHeader>
                    <CardTitle>{petCard.name}</CardTitle>
                </CardHeader>
                <Button className="mb-3" onClick={handleSeeMore}>
                    See more
                </Button>
            </Card>

            {/* Modal */}
            {isModalOpen && (
                <PetModal
                    pet={selectedPet} // Pass selected pet data
                    onClose={closeModal} // Pass close modal function
                />
            )}
        </>
        // <>
        // <Card className="hover:scale-110 transition duration-150 ease-in-out">
        // <div className="relative w-[200px] h-[200px]"> 
        //     <Image src={petPicture} alt="pet image" layout="fill" objectFit="cover" className="mt-5 rounded-t-lg "/>
        //     </div>
        //     <CardHeader>
        //         <CardTitle>{petName}</CardTitle>
        //     </CardHeader>
        //     <Button className="mb-3">See more</Button>
        // </Card>
        // </>
    )
}

export default PetCard;
