import Link from "next/link"

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

    return(
        <div className="flex justify-between w-full absolute z-10 py-8 px-10">
            <h1 className="text-amber-500 text-4xl font-bold">Bookstore</h1>
            <div className="flex gap-8 justify-center">
                {
                    NavbarLink.map((item,index)=>(
                        <Link key={index} href={`/${item.path}`} className="text-amber-500 font-bold py-2 px-6 rounded-3xl hover:bg-yellow-600 hover:text-amber-100 ">{item.title}</Link>
                    ))
                }
            </div>
        </div>
       
    )
}

export default Header
