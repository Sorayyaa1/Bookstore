import {footerLinks} from "../../../../core/constance/FooterLinks"
import Image from "next/image"
import Link from "next/link"
import FooterImage from "../../../../../public/Images/FooterImage.jpg"
function Footer(){
    return(
        <div className="flex gap-2 bg-black text-amber-900">
            <div>
                <Image 
                    alt="footerImage"
                    src={FooterImage}
                    quality={100}
                    width={150}
                    height={280}
                    />
            </div>
            <div className="flex justify-between w-8/12 mx-auto pt-10 ">
                  {
                footerLinks.map((item,index)=>(
                    <div key={index} className="flex flex-col gap-3 ">
                        <p className="font-semibold">{item.title}</p>
                        <div className="flex flex-col gap-3 text-sm">
                            {
                                item.sub.map((item,index)=>(
                                    <Link href={""}><p key={index}>{item}</p></Link> 
                                ))
                            }
                        </div>
                    </div>
                ))
                }
            </div>
               
        </div>
    )
}

export default Footer