"use client";

import PetForm from "@/components/PetForm";

export default function PetFormPage(){

    return(
        <>
        <div className="flex justify-center m-[20px]">
            <h1 className="text-3xl  text-customDarkBrown font-bold">Put your pet up for adoption!</h1>
        </div>
        <div className="flex justify-center">
            <div className="w-[400px] bg-white p-[20px] rounded-lg">
                <PetForm></PetForm>
            </div>
        </div>

        </>
    )
}