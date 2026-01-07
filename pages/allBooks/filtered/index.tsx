import { useRouter } from "next/router"
import { useContext, useEffect } from "react";
import { BookContext } from "@/pages/Context";
import Image from "next/image";

function filteredBook(){
    const {allBooksList,search,filterItems,setFilterItems,priceTo,priceFrom,setSelectedBook,setBtnValue,categoryFilter}=useContext(BookContext)
    const router=useRouter()
    const {min,max}=router.query;
    console.log(min,max)

    useEffect(()=>{
        priceTo &&
        setFilterItems(allBooksList.filter(item=>item.price>=priceFrom  && item.price<=priceTo && item.title.toLowerCase().includes(search.toLowerCase()) && item.category===categoryFilter))
    },[priceFrom,priceFrom,search,categoryFilter])

     function handlerClick(event:React.MouseEvent<HTMLButtonElement>){
        let buttonValue:string | number | undefined
        buttonValue=parseInt(event.currentTarget.value)
        setBtnValue(buttonValue)
        router.push(`/allBooks/filtered?min=${priceFrom}&max=${priceTo}/${buttonValue}`) 
        if(filterItems){
            const finedBook=filterItems.find(item=>item.id===buttonValue)
            if(finedBook){
              setSelectedBook(finedBook)
            }
       } 
    }
    
    return(
        <div>
            <div className="bg-amber-900 opacity-90">
                <h1 className="text-4xl text-amber-900 text-center py-8">Filtered Books</h1>
            </div>
            {
                filterItems!==undefined && filterItems.length>0 ? (
                    <div className="min-h-screen bg-amber-600 opacity-75 grid grid-cols-4 gap-4 p-10">
                        {
                            filterItems.map((item,index)=>(
                                <div key={index} className="flex flex-col gap-4  border-2 border-amber-50 rounded-t-2xl p-4 font-semibold text-amber-950 hover:shadow-lg hover:shadow-amber-800 ">
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
                                    <button onClick={handlerClick} value={item.id} className="bg-amber-400 rounded-2xl py-2 hover:bg-amber-700 hover:text-amber-100">shop</button>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div className='min-h-screen flex items-center justify-center bg-amber-600 opacity-75'>
                        <p className=' text-5xl text-amber-100 font-extrabold'>The book not found.</p>
                    </div>
                )
            }
        </div>
    )
}

export default filteredBook