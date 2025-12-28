import Image from "next/image"
import { useRouter } from "next/router"
import { useContext } from "react"
import {BookContext} from "../../Context/index"


function FictionBooks(){
    const {allBooksList,setBtnValue}=useContext(BookContext)
    const router=useRouter()

      function handleClick(event:React.MouseEvent<HTMLButtonElement>){
       let buttonValue:string | number | undefined
       buttonValue=parseInt(event.currentTarget.value)
       setBtnValue(buttonValue)
       router.push(`/category/SomeTitleFictionBooksList/${buttonValue}`) 
       
   }

      function handlerCategoryPage(){
        router.push('/category/SomeTitleFictionBooksList/AllFictionBooks')
      }
  
   const FictionBooksList=allBooksList.filter(item=>item.category==="Fiction")


    return(
        <div className="bg-transparent" id="Fiction">
            <div className="bg-transparent flex justify-between items-center px-10">
                <div id="pointer" className=" flex flex-col justify-center">
                    <p className=" text-amber-100 text-xl font-bold text-center">Category: Fiction</p>
                </div>
                <div>
                    <button onClick={handlerCategoryPage} className="text-amber-950 font-bold py-2 px-6 rounded-3xl hover:bg-amber-950 hover:opacity-80 hover:text-amber-100">See More</button>
                </div>
            </div>
            <div className=" grid grid-cols-4 gap-8 p-10">
                {
                    FictionBooksList.slice(0,4).map((item,index)=>(
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

export default FictionBooks