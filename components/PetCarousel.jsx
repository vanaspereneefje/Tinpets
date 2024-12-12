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



const PetCarousel = async ({ pet }) => {

//TODO add array of matched animals instead of this placeholder 
  // const dogCards = animals.animals.dogs;
  const fetchPet = async () => {
    try {
      const response = await fetch (`http://localhost:3001/api/v1/pets/find`, {
        method: 'GET',
        credentials: 'include',
        body: JSON.stringify({  age, breed, gender }), //TODO: check
      })
      if(!response.ok) {
        console.log('Failed to fetch pet data');
        return;
      }
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.log ('Error fetching the data:', error)
    }
  }

  const petData = await fetchPet();
  const speciesToFilter = ["Dog", "Cat", "Bird", "Fish"];
  const petCards = Array.isArray(petData) ? petData.filter((item) => speciesToFilter.includes(item.species)) : [];

  return (
      <>
      <Carousel className="w-[250px] left-1/2 translate-x-[-125px]">
        <CarouselContent>
            {petCards.map((pet, index) => (
            <CarouselItem key={index}>
                <PetCard petCard={petCard} index={index} />
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
