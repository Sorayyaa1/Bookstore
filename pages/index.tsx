import Image from "next/image";
import HomePageBackground from "../public/Images/HomePageBackground.jpg"
import { ChangeEvent, useState ,useContext } from "react";
import { useRouter } from "next/router";
import { book, BookContext } from "./Context";
import {categoryArray} from "./core/constance/categoryList"

function Home(){
    
    const{allBooksList,setFilterItems,filterItems}=useContext(BookContext)
    const[search,setSearch]=useState<string>()
    
    function handlerChangeInput(e:ChangeEvent<HTMLInputElement>){
        const searchValue=e.target.value.trim()
        setSearch(searchValue)
    }

    function handlerSearch(Item=search){
        const router=useRouter()
        if(Item){
            let filterItem:book[]
            filterItem=allBooksList.filter(item=>item.title.toLowerCase().includes(Item.toLowerCase()))
           setFilterItems(filterItem)
           
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
            <div className="absolute z-10 top-1/4 flex flex-col items-center gap-4 w-full">
                <p className="text-5xl text-amber-400 font-extrabold max-w-lg">A world of books, one click away</p>
                <p className="text-amber-500 text-lg font-semibold">Thousands of books across genres and ages, waiting to inspire your next chapter</p>
            </div>
            <div className="selectBook w-7/12 p-6 absolute z-10 top-7/12 flex items-end gap-4 text-amber-500 bg-amber-900 opacity-80 rounded-2xl">
                <div>
                   <label htmlFor="searchBook" >Search Book</label>
                   <input type="text" placeholder="Search by title/ author's name" id="searchBook" className="outline-none w-full border-2 border-amber-600 rounded-xl p-2" onChange={handlerChangeInput}/>
                </div>
                <div>
                    <label htmlFor="genre" >Genre</label>
                    <select name="" id="genre" className="border-2 border-amber-600 rounded-xl p-2 text-amber-600">
                        {
                            categoryArray.map((item,index)=>(
                                <option key={index} value={item.category}>{item.title}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="priceFrom" >Price From</label>
                    <select name="" id="priceFrom" className="border-2 border-amber-600 rounded-xl p-2 text-amber-600">
                        <option value="10">$ 10</option>
                        <option value="100">$ 100</option>
                        <option value="1000">$ 1000</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="priceTo" >Price To</label>
                    <select name="" id="priceTo" className="border-2 border-amber-600 rounded-xl p-2 text-amber-600">
                        <option value="10">$ 10</option>
                        <option value="100">$ 100</option>
                        <option value="1000">$ 1000</option>
                        <option value="10000">$ 10000</option>
                    </select>
                </div>
                <button type="button" onClick={()=>handlerSearch} className="text-amber-400 bg-amber-600 font-bold py-2 px-6 rounded-xl hover:bg-yellow-600 hover:text-amber-100 ">Search</button>
            </div>
            
        </div>
   )
}

export default Home