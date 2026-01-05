import {useDispatch, useSelector} from "react-redux"
import Image from "next/image"
import { RootState } from "../../lib/store";
import { cartItem, increment, decrement,removeItem} from "@/lib/features/books/booksSlice";


function shoppingCart(){
    let shoppingCartItms=useSelector((state:RootState)=>state.cart.cartItems)
    console.log("hhhhh:",shoppingCartItms)
     const dispatch=useDispatch()
     
     
      function Increment (id:number){
        let Item:cartItem | undefined
        Item=shoppingCartItms.find(item=>item.cartItem.id===id)
        Item ? dispatch(increment(Item.cartItem.id)) : Item
      }
       function Decrement (id:number){
       let Item: cartItem | undefined
       Item=shoppingCartItms.find(item=>item.cartItem.id===id)
       Item ? dispatch(decrement(Item.cartItem.id)) : Item
      }

      function Remove(id:number){
        let Item: cartItem | undefined
        Item=shoppingCartItms.find(item=>item.cartItem.id===id)
        Item ? dispatch(removeItem(Item.cartItem.id)) : Item
      }
      
      const ItemsPrice:number[]=shoppingCartItms.map(item=>item.cartItem.price*item.qty)
      let totalPrice:number=0
      for(let i of ItemsPrice){
           totalPrice+=i
      }
      

    return(
        <div>
            <div className="bg-amber-900 opacity-90">
                <h1 className="text-4xl text-amber-900 text-center py-8">Shopping Cart</h1>
            </div>
            <div className="bg-amber-600 opacity-75 min-h-screen flex flex-col gap-6">
                <p className="text-3xl text-amber-100 font-bold text-center pt-4"> Cart Items</p>
                <div className="flex flex-col gap-3 px-10 ">
                    {
                        shoppingCartItms.length>0 ? (
                            shoppingCartItms.map((Item,index)=>(  
                                <div key={index} className='grid grid-cols-6 gap-6 items-center text-[1vw] text-amber-100 border-2 border-amber-100 rounded-2xl p-4 font-semibold'>
                                    <div>
                                        <Image 
                                        alt="itemImage"
                                        src={Item.cartItem.image}
                                        width={853}
                                        height={1280}
                                        className="rounded-lg  shadow-amber-800 shadow-xl w-1/4 h-auto"/>
                                    </div>
                                    <div className='grid grid-cols-2 items-center gap-15 col-span-3'>
                                        <p>{Item.cartItem.title}</p>
                                        <p >$
                                            {
                                              Item.cartItem.price*Item.qty
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex gap-4 px-[1vw] items-center">
                                            <button onClick={()=>Increment(Item.cartItem.id)} className="shopBtns px-4">+</button>
                                            <p>{Item.qty}</p>
                                            <button onClick={()=>Decrement(Item.cartItem.id)} className="shopBtns px-4 ">-</button>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={()=>Remove(Item.cartItem.id)} className="py-2 w-full bg-amber-400 rounded-2xl  md:text-base sm:text-sm shadow-amber-800 shadow-lg hover:bg-amber-700 hover:text-amber-100 ">remove</button>
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
                <p className="text-center text-amber-100 font-bold">Total: $ {totalPrice}</p>
            </div>
        </div>
    )
}

export default shoppingCart