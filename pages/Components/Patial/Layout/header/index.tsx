import Link from "next/link"
import {Icons} from "../../../UI/icon/icon"
import { useContext } from "react"
import {BookContext} from "../../../../Context/index"

interface nav{
    id:number
    title:string
    path:string
}
const NavbarLink:nav[]=[
    {id:1,title:"Home",path:"/"},
    {id:2,title:"All books",path:"allBooks"},
    {id:3,title:"Category",path:'category'},
    {id:4,title:"Contact Us",path:'contactUs'},
]


function Header(){
    const {qty}=useContext(BookContext)
    // const qty=state.cartItems.length
     console.log(qty)
    return(
        <div className="flex justify-between w-full absolute z-10 py-8 px-10">
            <h1 className="text-amber-500 text-4xl font-bold">Bookstore</h1>
            <div className="flex gap-8 text-amber-500 justify-center">
                <div className="flex gap-8 justify-center">
                {
                    NavbarLink.map((item,index)=>(
                        <Link key={index} href={`/${item.path}`} className=" font-bold py-2 px-6 rounded-3xl hover:bg-yellow-600 hover:text-amber-100 ">{item.title}</Link>
                    ))
                }
                </div>
                <div className="flex flex-col gap-0 items-center justify-center">
                    <span className="w-2/4  text-amber-100 text-xs max-w-xl ">{qty}</span>
                    <div className=" flex flex-col items-center justify-center w-2/4 min-w-7 max-h-10">
                       <Icons icon={'shoppingCart'} />
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Header
