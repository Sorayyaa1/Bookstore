import Image from "next/image"
import HomePageBackground from "../../public/Images/HomePageBackground.jpg"
import { FormEvent } from "react"
function ContactUs(){

    function submit(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
    }

    return(
        <div>
            <div className="bg-amber-900 opacity-90">
               <h1 className="text-4xl text-amber-900 text-center py-8">Contact Us</h1>
            </div>
            <div className="flex flex-col items-center">
                <Image 
                alt="backgroundImage"
                src={HomePageBackground}
                fill
                quality={100}
                priority
                style={{
                    objectFit: 'cover',
                    position:"absolute",

                }}
                />
                <div className="w-6/12 flex flex-col gap-6 absolute top-1/5 bg-amber-900 opacity-80 rounded-2xl p-5 text-amber-400">
                    <div className="flex flex-col gap-2 text-center">
                        <p className="text-3xl font-bold">Get in Touch</p>
                        <p className="text-sm ">you can reach us any time</p>
                    </div>
                    <form action="" onSubmit={submit} className="flex flex-col gap-4 items-center">
                        <div className="w-full flex gap-4">
                           <input type="text" placeholder="Enter your name" className="contactUsInputs"/>
                           <input type="text" placeholder="Enter your lastname" className="contactUsInputs"/>
                        </div>
                        <input type="email" placeholder="Enter your email" className="contactUsInputs"/>
                        <textarea name="textarea" id="textarea" rows={5} cols={12} placeholder="Tell us how we can help you" className="contactUsInputs resize-none" ></textarea>
                        <button type="submit" className="text-amber-400 bg-amber-600 font-bold py-2 px-6 w-1/4 rounded-xl hover:bg-yellow-600 hover:text-amber-100">Send</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default ContactUs