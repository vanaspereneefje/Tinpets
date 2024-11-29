import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import PetCard from "./PetCard";
import animals from "@/public/pets.json";


function PetCarousel () {

//TODO add array of matched animals instead of this placeholder 
    const dogCards = animals.animals.dogs;

    return (
        <>
        <Carousel className="w-[250px] left-1/2 translate-x-[-100px]">
          <CarouselContent>
              {dogCards.map((petCard, index) => (
              <CarouselItem key={index}>
                  <PetCard petCard={petCard} index={index} />
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