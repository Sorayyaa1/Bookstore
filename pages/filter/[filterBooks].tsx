import useCustomHook from "../Hooks/useCustomHook"
import Image from "next/image"

function Filter(){
    const {filterItems}=useCustomHook()
    console.log(filterItems)
    return(
        <div>
           {
            filterItems.map((item,index)=>(
                 <div key={index} className="flex flex-col gap-4 border-2 border-amber-50 rounded-t-2xl p-4 font-semibold text-amber-950 hover:shadow-lg hover:shadow-amber-800 ">
                    <div className="">
                        <Image 
                            alt="bookImage"
                            src={item.image}
                            width={853}
                            height={1280}
                            className="rounded-lg border-2 border-white w-full h-auto"/>
                    </div>
                    <p  className=" text-lg">{item.title}</p>
                    <div className="flex justify-between items-center text-sm">
                        <p>{item.author}</p>
                        <p className="bg-amber-500 py-2 px-6 rounded-2xl">{item.price} $</p>
                    </div>
                    <button className="bg-amber-400 rounded-2xl py-2 hover:bg-amber-700 hover:text-amber-100">shop</button>
                </div>
            ))
           }
        </div>
    )
}

export default Filter