import { createContext } from "react";
import { useState} from "react";
import { ChangeEvent} from "react";

interface children{
    children:React.ReactNode
}


export interface book{
    title:string
    id:number
    category:string
    author:string
    price:number
    image:string
    description:string
}

interface BookContextType{
allBooksList:book[]
search:string
setSearch:React.Dispatch<React.SetStateAction<string>>
setFilterItems:React.Dispatch<React.SetStateAction<book[] | undefined>>
filterItems:book[] | undefined
selectedBook:book | undefined
setSelectedBook:React.Dispatch<React.SetStateAction<book | undefined>>
btnValue: number | undefined
setBtnValue:React.Dispatch<React.SetStateAction<number | undefined>>
categoryFilter:string
setCategoryFilter:React.Dispatch<React.SetStateAction<string>>
priceFrom:number
setPriceFrom:React.Dispatch<React.SetStateAction<number>>
priceTo:number
setPriceTo:React.Dispatch<React.SetStateAction<number>>
shoppingCart:book[]
setshoppingCart:React.Dispatch<React.SetStateAction<book[] | never>>
handleChangeInput:React.ChangeEventHandler<HTMLInputElement>
handleCategory:React.ChangeEventHandler<HTMLSelectElement>
handlePriceFrom:React.ChangeEventHandler<HTMLInputElement>
handlePriceTo:React.ChangeEventHandler<HTMLInputElement>
}

const allBooksList:book[]=[
    {title:"Human and world",id:1,category:"science",author:"Antoney Biefc",price:80,image:"/Images/BooksImages/Science-01.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Brain",id:2,category:"science",author:"Elizabeth Tiuorgf",price:60,image:"/Images/BooksImages/Science-02.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Milky Way Galaxy",id:3,category:"science",author:"John Rfigjhg",price:110,image:"/Images/BooksImages/Science-03.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Autobiography",id:22,category:"non-Fiction-Narrative",author:"Gorge Wiotads",price:800,image:"/Images/BooksImages/non-Fiction-Narrative-03.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"The Earth",id:4,category:"science",author:"Jain Zigjhg",price:1110,image:"/Images/BooksImages/Science-04.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Parallel Worlds",id:5,category:"science",author:"Jain Zigjhg",price:200,image:"/Images/BooksImages/Science-05.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Our Brain",id:6,category:"science",author:"Gas Kuymp",price:200,image:"/Images/BooksImages/Science-06.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Mysterious Forest",id:7,category:"Fiction",author:"Tomas Elyot",price:250,image:"/Images/BooksImages/Fiction-01.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Itinerary",id:21,category:"non-Fiction-Narrative",author:"Sam Fioas",price:500,image:"/Images/BooksImages/non-Fiction-Narrative-02.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Dark Moon",id:8,category:"Fiction",author:"Gorge Houme",price:20,image:"/Images/BooksImages/Fiction-02.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Secret Mission",id:9,category:"Fiction",author:"Tadud Ruidsd",price:300,image:"/Images/BooksImages/Fiction-03.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"The Farm",id:18,category:"Poetry",author:"Mohhg Edsas",price:2000,image:"/Images/BooksImages/Poetry-06.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"The Last Alliance",id:11,category:"Fiction",author:"Moadf Kipfs",price:200,image:"/Images/BooksImages/Fiction-05.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Lighthouse",id:12,category:"Fiction",author:"Tinda Kiopds",price:50,image:"/Images/BooksImages/Fiction-06.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Red Leaves",id:13,category:"Poetry",author:"Soytrr Kiamls",price:75,image:"/Images/BooksImages/Poetry-01.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Logbook",id:20,category:"non-Fiction-Narrative",author:"Tomas Bioasd",price:1500,image:"/Images/BooksImages/non-Fiction-Narrative-01.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Red Roses",id:14,category:"Poetry",author:"Taranom Pjkhjk",price:800,image:"/Images/BooksImages/Poetry-02.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Crescent Moon",id:16,category:"Poetry",author:"Ryuuyt Loiuytt",price:854,image:"/Images/BooksImages/Poetry-04.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Peace Of Mind",id:15,category:"Poetry",author:"Bfgfg Thjhj",price:1001,image:"/Images/BooksImages/Poetry-03.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Moon & See",id:17,category:"Poetry",author:"Artyio Dayu",price:195,image:"/Images/BooksImages/Poetry-05.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Unwritten",id:19,category:"Poetry",author:"Taranom Pjkhjk",price:2500,image:"/Images/BooksImages/Poetry-07.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
    {title:"Short Story",id:10,category:"Fiction",author:"Coitan Kiupk",price:9,image:"/Images/BooksImages/Fiction-04.jpg",description:"Each book in this collection invites you into a world of reflection, memory, and meaning. Whether fiction, poetry, or nonfiction narrative, these covers echo the quiet power of stories — handwritten letters, moonlit windows, forgotten train stations, and solitary paths. Designed to evoke emotion and curiosity, they offer a timeless aesthetic for readers who seek depth, beauty, and resonance in every page."},
]


const PriceList=allBooksList.map(item=>item.price)
const PriceListToNumber=PriceList.map(item=>Number(item))
const sortedPrice=PriceListToNumber.sort(function(a,b){ return a-b})
const sortedPriceLength=sortedPrice.length-1
const initialMaxPrice=sortedPrice[sortedPriceLength]
console.log(initialMaxPrice)

export const BookContext=createContext< BookContextType>({} as BookContextType)

function BookProvider({children}:children){
   
    const [search,setSearch]=useState<string>('')
    const [filterItems,setFilterItems]=useState<book[]>()
    const [selectedBook,setSelectedBook]=useState<book>()
    const [btnValue,setBtnValue]=useState<number>()
    const [categoryFilter,setCategoryFilter]=useState<string>('all')
    const [priceFrom,setPriceFrom]=useState<number>(0)
    const [priceTo,setPriceTo]=useState<number>(initialMaxPrice)
    const [shoppingCart,setshoppingCart]=useState<book[]>([]) 

    function handleChangeInput(e:ChangeEvent<HTMLInputElement>){
            const searchValue=e.target.value.trim()
            setSearch(searchValue)
        }

    function handleCategory(event:ChangeEvent<HTMLSelectElement>){
        const genre=event.target.value
        setCategoryFilter(genre)         
    }  
    
      function handlePriceFrom(event:ChangeEvent<HTMLInputElement>){
        const price=event.target.value
        const minPrice=parseInt(price)
        setPriceFrom(minPrice)
    }

    function handlePriceTo(event:ChangeEvent<HTMLInputElement>){
       const price=event.target.value
       const maxPrice=parseInt(price)
       setPriceTo(maxPrice)
    }
 

    return(
        <BookContext.Provider value={{allBooksList,search,setSearch,
        setFilterItems,filterItems,
        selectedBook,setSelectedBook,
        btnValue,setBtnValue,
        categoryFilter,setCategoryFilter,
        priceFrom,setPriceFrom,
        priceTo,setPriceTo,
        shoppingCart,setshoppingCart,
        handleChangeInput,handleCategory,
        handlePriceFrom,handlePriceTo}}
        >
           {children}
        </BookContext.Provider >

    )
}

export default BookProvider
