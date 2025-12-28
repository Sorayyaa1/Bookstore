// "use client";

// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../store'
// import { book } from '@/pages/Context'

// interface cartItem{
//   cartItem:book
// }

// export interface CartItemsState {
//   cartItems: CartItemType[]
// } 

// const initialState: CartItemsState = {
//   cartItems:JSON.parse(localStorage.getItem("cartItems") || "[]" )
// }

// export interface CartItemType{
//   CartItem:cartItem
//   qty:number
// }


// export const bookSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addItem: (state:CartItemsState,action:PayloadAction<number>) => {
//       let Item:CartItemType | undefined
//       Item=state.cartItems.find((item:CartItemType)=>item.CartItem.cartItem.id===action.payload) 
//       Item ? ([...state.cartItems,state.cartItems.map((item:CartItemType)=>(
//            item.CartItem.cartItem.id===action.payload ? {...item, qty:item.qty+1} : item
//         ))]) : ([...state.cartItems,{qty:1}])
//       },
//     removeItem: (state:CartItemsState,action:PayloadAction<number>) => {
//       let Item:CartItemType | undefined
//       Item=state.cartItems.find((item:CartItemType)=>item.CartItem.cartItem.id===action.payload)
//       Item && Item.qty===1 && (state.cartItems=state.cartItems.filter(item=>item.CartItem.cartItem.id!==Item.CartItem.cartItem.id))
      
//      },
//     incrementByAmount: (state:CartItemsState, action: PayloadAction<number>) => {
      
//     }
//   }
// })

// export const { addItem, removeItem } = bookSlice.actions
// export const selectCount = (state: RootState) => state.book.cartItems
// export default bookSlice.reducer