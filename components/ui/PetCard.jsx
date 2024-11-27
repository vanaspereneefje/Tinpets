import animals from "@/public/pets.json" assert { type: 'json' };
console.log(animals);

function PetCard () {
    return (
    <h1>This is a pet card page</h1>
    )
}

export default PetCard;
