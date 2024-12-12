import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PetCard from "./PetCard";
// import animals from "@/public/pets.json";
// import { Slider } from "@/components/ui/slider";



const PetCarousel = async () => {

  const matchingPets = JSON.parse(localStorage.getItem("matchingPets")) || [];
//TODO add array of matched animals instead of this placeholder 
  // const dogCards = animals.animals.dogs;
  const speciesToFilter = ["Dog", "Cat", "Bird", "Fish"];
  const petCards = matchingPets.filter((item) =>
    speciesToFilter.includes(item.species)
  );

  if (petCards.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-lg text-gray-600">No matching pets found. Try updating your preferences!</p>
      </div>
    );
  }

  return (
      <>
      <Carousel className="w-[250px] left-1/2 translate-x-[-125px]">
        <CarouselContent>
            {petCards.map((pet, index) => (
            <CarouselItem key={index}>
                <PetCard petCard={pet} index={index} />
                {/* <p className="mt-[20px]">energy level:</p>
                <div className="w-[250px] flex justify-self-center m-[20px] mt-[10px]">
                  <Slider defaultValue={[animals.animals.dogs[index].energy]} max={100} step={1} disabled></Slider>
                </div> */}
                <div className="w-[250px] flex flex-col justify-self-center m-[10px] gap-[20px]">
                  <p>age: {pet.age}</p>
                  <p>pet breed: {pet.breed}</p>
                  <p>sex: {pet.gender}</p>
                  {/* <p>dog friendly: {animals.animals.dogs[index].dogfriendly ? "yes" : "no"}</p>
                  <p>kid friendly: {animals.animals.dogs[index].kidfriendly ? "yes" : "no"}</p> */}
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </>
    );
  }

export default PetCarousel;
