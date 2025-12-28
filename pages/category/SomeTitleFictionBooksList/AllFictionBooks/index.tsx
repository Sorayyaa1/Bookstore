import Image from "next/image"
import { useRouter } from "next/router"
import { useContext } from "react"
import {BookContext} from "../../../Context/index"

function AllFictionBooks(){
    const {allBooksList,setSelectedBook}=useContext(BookContext)
    const router=useRouter()

      function handleClick(event:React.MouseEvent<HTMLButtonElement>){
       const buttonValue=event.currentTarget.value
       router.push(`/category/${buttonValue}`) 
       const finedBook=allBooksList.find(item=>item.id===parseInt(buttonValue))
       if(finedBook){
        setSelectedBook(finedBook)
       } 
   }

   const FictionBooksList=allBooksList.filter(item=>item.category==="Fiction")


    return(
        <div className="bg-transparent" id="Fiction">
           
            <div className=" grid grid-cols-4 gap-8 p-10">
                {
                    FictionBooksList.map((item,index)=>(
                        <div key={index} className="flex flex-col gap-4 border-2 border-amber-50 rounded-t-2xl p-4 font-semibold text-amber-950 hover:shadow-lg hover:shadow-amber-800 scale-100 transform hover:scale-105 transition-transform duration-300 ease-in-out ">
                            <div>
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
                            <button onClick={handleClick} value={item.id} className="bg-amber-400 rounded-2xl py-2 hover:bg-amber-700 hover:text-amber-100">shop</button>
                        </div>
                    ))   
                }
            </div>
        </div>
    )
}

export default AllFictionBooks