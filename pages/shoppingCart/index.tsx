import {useDispatch, useSelector} from "react-redux"
import Image from "next/image"
import { RootState } from "../../lib/store";
import { cartItem, increment } from "@/lib/features/books/booksSlice";


function shoppingCart(){
    let shoppingCartItms=useSelector((state:RootState)=>state.cart.cartItems)
    console.log("hhhhh:",shoppingCartItms)
     const dispatch=useDispatch()
     
     
      function Increment (id:number){
        
      }
       function Decrement (){
       
      }
    

    return(
        <div>
            <div className="bg-amber-900 opacity-90">
                <h1 className="text-4xl text-amber-900 text-center py-8">Shopping Cart</h1>
            </div>
            <div className="bg-amber-600 opacity-75 min-h-screen flex flex-col gap-4">
                <p className="text-3xl text-amber-100 font-bold text-center py-2"> Cart Items</p>
                <div className="flex flex-col gap-4">
                    {
                        shoppingCartItms.length>0 ? (
                            shoppingCartItms.map((Item,index)=>(  
                                <div key={index} className='flex justify-between gap-10 items-center'>
                                    <div>
                                        <Image 
                                        alt="itemImage"
                                        src={Item.cartItem.image}
                                        width={853}
                                        height={1280}
                                        className="rounded-lg  shadow-amber-800 shadow-xl w-1/4 h-auto"/>
                                    </div>
                                    <div className='flex justify-center gap-15 text-lg'>
                                        <p>{Item.cartItem.title}</p>
                                        <p>{Item.cartItem.price}</p>
                                        <div>
                                            <div className="flex gap-4 px-[1vw] items-center">
                                               <button onClick={Increment} className="shopBtns px-4">+</button>
                                               <p>{Item.qty}</p>
                                               <button onClick={Decrement} className="shopBtns px-4">-</button>
                                            </div>
                                        </div>
                                        <button className="bg-amber-400 rounded-2xl py-2 hover:bg-amber-700 hover:text-amber-100">remove</button>
                                    </div>
                                </div> 
                            ))
                               
                        ) : (
                            <div className='min-h-screen flex items-center justify-center bg-amber-600 opacity-75'>
                               <p className=' text-5xl text-amber-100 font-extrabold'>Cart is empty.</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default shoppingCart