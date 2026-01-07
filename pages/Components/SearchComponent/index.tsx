import { useContext } from "react";
import { useRouter } from "next/router";
import { BookContext } from "@/pages/Context/index";
import {categoryArray} from "@/pages/core/constance/categoryList"


function SearchComponent(){
    const router=useRouter()
    const {
        handleChangeInput,handleCategory,
        handlePriceFrom,handlePriceTo,
        search,categoryFilter,
        priceFrom,priceTo,
        setPriceFrom,setPriceTo,
        setSearch
        }=useContext(BookContext)

          
    function handleSearch(Item=search,genre=categoryFilter,minimumPrice=priceFrom,maximumPrice=priceTo){
       minimumPrice || maximumPrice || Item || genre 
        router.push(`/allBooks/filtered?min=${minimumPrice}&max=${maximumPrice}&title=${Item}&genre=${genre}`)  
        setSearch('')
    }

    return(
            <div className=" w-9/12 mx-auto py-8 px-6 flex flex-col items-center  gap-6 text-amber-950 bg-amber-600 rounded-2xl border-2 border-amber-700 shadow-md shadow-amber-900">
                <div className="searchbar w-11/12 flex items-center gap-2">
                    <label htmlFor="searchBook"  className="w-3/12 text-lg lg:text-base md:text-sm sm:text-xs font-semibold">Search Book</label>
                    <input type="text" placeholder="Search by title/ author's name" id="searchBook" className="outline-none w-full border-2 border-amber-700 rounded-xl p-2 selectBookRespansvieText" onChange={handleChangeInput}/>
                </div>
                <div className="DetailsSearchedBook w-11/12 flex  gap-4 justify-between items-end">
                    <div>
                        <label htmlFor="genre" className="text-lg font-semibold lg:text-base md:text-sm sm:text-xs">Genre</label>
                        <select name="" id="genre" onChange={handleCategory} className="border-2 border-amber-700 rounded-xl p-2 text-amber-800 DetailsSearchedBookRespansvieText">
                        {
                            categoryArray.map((item,index)=>(
                                <option key={index} value={item.category}>{item.title}</option>
                            ))
                        }
                        </select>
                    </div>
                    <div className="priceInput">
                        <div>
                            <label htmlFor="priceFrom">Price From</label>
                            <input type="number"  id="priceFrom" onChange={handlePriceFrom} min={0} />
                        </div>
                        <div>
                            <label htmlFor="priceTo">Price To</label>
                            <input type="number"  id="priceTo" onChange={handlePriceTo}  min={0} />
                        </div>
                    </div>
                </div>
                <button type="button" onClick={()=>handleSearch(search)} className=" shopBtns block mx-auto w-2/5 font-semibold xl:text-lg lg:text-base md:text-sm sm:text-[1.9vw]">Search</button>
            </div>
    )
}

export default SearchComponent