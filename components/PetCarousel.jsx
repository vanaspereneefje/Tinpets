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

//TODO add actual value of energy slider
    const sliderValue = animals.animals.dogs[0].energy;
    console.log(sliderValue);

    return (
        <>
        <Carousel className="w-[250px] left-1/2 translate-x-[-125px]">
          <CarouselContent>
              {dogCards.map((petCard, index) => (
              <CarouselItem key={index}>
                  <PetCard petCard={petCard} index={index} />
                  <div className="w-[250px] flex justify-self-center m-[20px]">
                    <Slider defaultValue={[sliderValue]} max={100} step={1} disabled></Slider>
                  </div>
                  <div className="w-[250px] flex justify-self-center m-[20px]">
                    
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