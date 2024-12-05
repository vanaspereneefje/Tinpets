import { headers } from "next/headers";
import animals from "@/public/pets.json";
import PetCard from "@/components/PetCard";

async function OurPetsPage() {

    const getCards = async (req, res) => {
        const headersList = await headers()
        const cards = await fetch('http://localhost:3001/api/v1/pets/get-all', {
            method: 'GET',
            credentials: 'include',
            headers: {
                ...(headersList.get('cookie') ? { Cookie: (headersList.get('cookie')) } : {})
            }
        })
        const jsonCards = await cards.json()
        return (jsonCards)
    }
    const cards = await getCards()
    const dogCards = animals.animals.dogs;
    const catCards = animals.animals.cats;
    const birdCards = animals.animals.birds;
    console.log(cards)

    return (
        <>
            <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Dogs</h1>
            <div className="flex flex-wrap justify-center gap-5">
                {dogCards.map((petCard, index) => (
                    <PetCard key={index} petCard={petCard} index={index} />
                ))}
            </div>
            <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Cats</h1>
            <div className="flex flex-wrap justify-center gap-5">
                {catCards.map((petCard, index) => (
                    <PetCard key={index} petCard={petCard} index={index} />
                ))}
            </div>
            <h1 className='font-bold text-2xl text-center mb-5 mt-10'>Birds</h1>
            <div className="flex flex-wrap justify-center gap-5">
                {birdCards.map((petCard, index) => (
                    <PetCard key={index} petCard={petCard} index={index} />
                ))}
            </div>
        </>

    )
}

export default OurPetsPage;
