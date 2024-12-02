import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import PetCard from "./PetCard";
import animals from "@/public/pets.json";
import { Slider } from "@/components/ui/slider";



function PetCarousel () {

//TODO add array of matched animals instead of this placeholder 
    const dogCards = animals.animals.dogs;

    return (
        <>
        <Carousel className="w-[250px] left-1/2 translate-x-[-125px]">
          <CarouselContent>
              {dogCards.map((petCard, index) => (
              <CarouselItem key={index}>
                  <PetCard petCard={petCard} index={index} />
                  <div className="w-[250px] flex justify-self-center m-[20px]">
                    <Slider defaultValue={[animals.animals.dogs[index].energy]} max={100} step={1} disabled></Slider>
                  </div>
                  <div className="w-[250px] flex justify-self-center m-[10px]">
                    <p>age: {animals.animals.dogs[index].age}</p>
                  </div>
                  <div className="w-[250px] flex justify-self-center m-[10px]">
                    <p>personality type: {animals.animals.dogs[index].personalityType}</p>
                  </div>
                  <div className="w-[250px] flex justify-self-center m-[10px]">
                    <p>cat friendly: {animals.animals.dogs[index].catfriendly ? "yes" : "no"}</p>
                  </div>
                  <div className="w-[250px] flex justify-self-center m-[10px]">
                    <p>dog friendly: {animals.animals.dogs[index].dogfriendly ? "yes" : "no"}</p>
                  </div>
                  <div className="w-[250px] flex justify-self-center m-[10px]">
                    <p>kid friendly: {animals.animals.dogs[index].kidfriendly ? "yes" : "no"}</p>
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