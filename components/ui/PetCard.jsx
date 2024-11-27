import animals from "@public/pets.json" assert { type: 'json' };
console.log(animals);

function PetCard () {
    return animals;
}

export default PetCard;