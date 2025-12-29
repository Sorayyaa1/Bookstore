import Image from "next/image";
import HomePageBackground from "../public/Images/HomePageBackground.jpg"
import { ChangeEvent, useState ,useContext } from "react";
import { useRouter } from "next/router";
import { book, BookContext } from "./Context";
import {categoryArray} from "./core/constance/categoryList"
import {priceFromList,priceToList} from "./core/constance/minimumMaximumPrices"

function Home(){
    const router=useRouter()
    const{allBooksList,
        setFilterItems,filterItems,
        categoryFilter,setCategoryFilter,
        priceFrom,setPriceFrom,
        priceTo,setPriceTo
        }=useContext(BookContext)
    const[search,setSearch]=useState<string>()
    
    function handlerChangeInput(e:ChangeEvent<HTMLInputElement>){
        const searchValue=e.target.value.trim()
        setSearch(searchValue)
    }
    
    function handlerCategory(event:ChangeEvent<HTMLSelectElement>){
        const genre=event.target.value
        setCategoryFilter(genre)         
    }

    function handlerPriceFrom(event:ChangeEvent<HTMLSelectElement>){
        const price=event.target.value
        const minPrice=parseInt(price)
        setPriceFrom(minPrice)
    }

    function handlerPriceTo(event:ChangeEvent<HTMLSelectElement>){
       const price=event.target.value
       const maxPrice=parseInt(price)
       setPriceTo(maxPrice)
    }
 
    function handlerSearch(Item=search,genre=categoryFilter,minimumPrice=priceFrom,maximumPrice=priceTo){
        if(Item){
            let filterBook:book[]
            if(filterBook=allBooksList.filter(item=>item.title.toLowerCase().includes(Item.toLowerCase()))){
                if(filterBook=filterBook.filter(item=>item.category===genre)){
                    if(filterBook=filterBook.filter(item=>item.price>=minimumPrice && item.price<=maximumPrice)){
                        setFilterItems(filterBook)
                    }
                }
            }
        } 
        router.push('/filter') 
    }

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
            <div className=" w-9/12 py-8 px-6 absolute z-10 top-6/12 flex flex-col items-center gap-6 text-amber-500 bg-amber-900 opacity-80 rounded-2xl ">
                <div className="searchbar w-11/12 flex items-center gap-2">
                   <label htmlFor="searchBook"  className="w-3/12 text-lg lg:text-base md:text-sm sm:text-xs font-semibold">Search Book</label>
                   <input type="text" placeholder="Search by title/ author's name" id="searchBook" className="outline-none w-full border-2 border-amber-600 rounded-xl p-2 selectBookRespansvieText" onChange={handlerChangeInput}/>
                </div>
                <div className="DetailsSearchedBook w-11/12 flex  gap-4 justify-between items-end">
                    <div>
                        <label htmlFor="genre" className="text-lg font-semibold lg:text-base md:text-sm sm:text-xs">Genre</label>
                        <select name="" id="genre" onChange={handlerCategory} className="border-2 border-amber-600 rounded-xl p-2 text-amber-600 DetailsSearchedBookRespansvieText">
                        {
                            categoryArray.map((item,index)=>(
                                <option key={index} value={item.category}>{item.title}</option>
                            ))
                        }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="priceFrom" >Price From</label>
                        <select onChange={handlerPriceFrom} name="" id="priceFrom" className="border-2 border-amber-600 rounded-xl p-2 text-amber-600 DetailsSearchedBookRespansvieText">
                        {
                            priceFromList.map((item,index)=>(
                               <option key={index} value={item.value} >$ {item.price}</option>
                            ))
                        }
                       </select>
                    </div>
                    <div>
                        <label htmlFor="priceTo" >Price To</label>
                        <select onChange={handlerPriceTo} name="" id="priceTo" className="border-2 border-amber-600 rounded-xl p-2 text-amber-600 DetailsSearchedBookRespansvieText">
                        {
                            priceToList.map((item,index)=>(
                                <option key={index} value={item.value} >$ {item.price}</option>
                            ))
                        }
                        </select>
                    </div>  
                </div>
                <button type="button" onClick={()=>handlerSearch(search)} className="text-amber-400 bg-amber-600 font-bold py-2 px-6 w-5/12 rounded-xl hover:bg-yellow-600 hover:text-amber-100 xl:text-lg lg:text-base md:text-sm sm:text-[1.9vw]">Search</button>
            </div>
            
        </div>
   )
}

export default Home