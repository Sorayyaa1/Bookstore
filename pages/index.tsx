import Image from "next/image";
import HomePageBackground from "../public/Images/HomePageBackground.jpg"


function Home(){

   return(
        <div className="homeBackground h-screen relative flex flex-col items-center">
            <Image 
            alt="HomePageBackground"
            src={HomePageBackground}
            quality={100}
            fill
            priority
            style={{
               objectFit: 'cover',
               position:"absolute"
             }}
            />
            <div className="absolute z-10 top-1/4 flex flex-col items-center gap-8 w-full">
                <p className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl max-w-xs:{text-xl} text-amber-400 font-extrabold ">A world of books, one click away</p>
                <p className="text-amber-500 xl:text-lg lg:text-md md:text-sm sm:text-xs xs:text-xs  font-semibold">Thousands of books across genres and ages, waiting to inspire your next chapter</p>
            </div>
            
        </div>
   )
}

export default Home