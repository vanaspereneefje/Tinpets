import { Button } from "@/components/ui/button";

function LandingPage () {
    const bttnText = "Let's get matched!";
    return (
        <>
        <video autoPlay muted loop id="myVideo">
        <source src="women_dogs.mp4" type="video/mp4"></source>
        </video>
        <div className="flex flex-col justify-center items-center text-center h-screen">
            <h1 className="text-5xl m-[20px]">Looking for your dream pet?</h1>
            <h2 className="text-3xl m-[20px]">Do not look any further!</h2>
            <Button className="m-[50px] text-2xl p-[25px]">{bttnText}</Button>
            <p className="text-xl">Fill in our questionnaire to get matched with the pet of your dreams.</p>
        </div>
        </>
    )
}

export default LandingPage;