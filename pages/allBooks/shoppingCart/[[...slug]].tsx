import { useContext } from "react"
import { BookContext } from "@/pages/Context"
import { UseSelector,useDispatch } from "react-redux"
function ShoppingCart(){
    const dispatch=useDispatch()
    
    const {qty,setQty}=useContext(BookContext)
    //  useEffect(()=>{
    //     if(CartItem:CartItemType){
    //        setQty((prev)=>CartItem.qty)
    //     }
    // },[CartItem])

    return(
        <div>
            <div className="bg-amber-900 opacity-90">
                <h1 className="text-4xl text-amber-900 text-center py-8">Shopping Cart</h1>
            </div>

        </div>
    )
}

export default ShoppingCart