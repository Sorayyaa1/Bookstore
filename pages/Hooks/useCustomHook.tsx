import { useState } from "react"

export interface book{
    title:string
    id:number
    category:string
    author:string
    price:number
    image:string
}

const allBooksList:book[]=[
    {title:"Human and world",id:1,category:"science",author:"Antoney Biefc",price:80,image:"/Images/BooksImages/Science-01.jpg"},
    {title:"Brain",id:2,category:"science",author:"Elizabeth Tiuorgf",price:60,image:"/Images/BooksImages/Science-02.jpg"},
    {title:"Milky Way Galaxy",id:3,category:"science",author:"John Rfigjhg",price:110,image:"/Images/BooksImages/Science-03.jpg"},
    {title:"Autobiography",id:22,category:"non-Fiction-Narrative",author:"Gorge Wiotads",price:800,image:"/Images/BooksImages/non-Fiction-Narrative-03.jpg"},
    {title:"The Earth",id:4,category:"science",author:"Jain Zigjhg",price:1110,image:"/Images/BooksImages/Science-04.jpg"},
    {title:"Parallel Worlds",id:5,category:"science",author:"Jain Zigjhg",price:200,image:"/Images/BooksImages/Science-05.jpg"},
    {title:"Our Brain",id:6,category:"science",author:"Gas Kuymp",price:200,image:"/Images/BooksImages/Science-06.jpg"},
    {title:"Mysterious Forest",id:7,category:"Fiction",author:"Tomas Elyot",price:250,image:"/Images/BooksImages/Fiction-01.jpg"},
    {title:"Itinerary",id:21,category:"non-Fiction-Narrative",author:"Sam Fioas",price:500,image:"/Images/BooksImages/non-Fiction-Narrative-02.jpg"},
    {title:"Dark Moon",id:8,category:"Fiction",author:"Gorge Houme",price:20,image:"/Images/BooksImages/Fiction-02.jpg"},
    {title:"Secret Mission",id:9,category:"Fiction",author:"Tadud Ruidsd",price:300,image:"/Images/BooksImages/Fiction-03.jpg"},
    {title:"The Farm",id:18,category:"Poetry",author:"Mohhg Edsas",price:2000,image:"/Images/BooksImages/Poetry-06.jpg"},
    {title:"The Last Alliance",id:11,category:"Fiction",author:"Moadf Kipfs",price:200,image:"/Images/BooksImages/Fiction-05.jpg"},
    {title:"Lighthouse",id:12,category:"Fiction",author:"Tinda Kiopds",price:50,image:"/Images/BooksImages/Fiction-06.jpg"},
    {title:"Red Leaves",id:13,category:"Poetry",author:"Soytrr Kiamls",price:75,image:"/Images/BooksImages/Poetry-01.jpg"},
    {title:"Logbook",id:20,category:"non-Fiction-Narrative",author:"Tomas Bioasd",price:1500,image:"/Images/BooksImages/non-Fiction-Narrative-01.jpg"},
    {title:"Red Roses",id:14,category:"Poetry",author:"Taranom Pjkhjk",price:800,image:"/Images/BooksImages/Poetry-02.jpg"},
    {title:"Crescent Moon",id:16,category:"Poetry",author:"Ryuuyt Loiuytt",price:854,image:"/Images/BooksImages/Poetry-04.jpg"},
    {title:"Peace Of Mind",id:15,category:"Poetry",author:"Bfgfg Thjhj",price:1001,image:"/Images/BooksImages/Poetry-03.jpg"},
    {title:"Moon & See",id:17,category:"Poetry",author:"Artyio Dayu",price:195,image:"/Images/BooksImages/Poetry-05.jpg"},
    {title:"Unwritten",id:19,category:"Poetry",author:"Taranom Pjkhjk",price:2500,image:"/Images/BooksImages/Poetry-07.jpg"},
    {title:"Short Story",id:10,category:"Fiction",author:"Coitan Kiupk",price:9,image:"/Images/BooksImages/Fiction-04.jpg"},
]


function useCustomHook(){
   const [filterItems,setFilterItems]=useState<book[]>([])
   const [selectedBook,setSelectedBook]=useState<book>()
   
return {allBooksList,setFilterItems,filterItems,selectedBook,setSelectedBook}
}

export default useCustomHook