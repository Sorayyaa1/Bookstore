"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { book } from '@/pages/Context'



export interface cartItem{
  cartItem:book
  qty:number
}


export interface CartItemsState {
  cartItems: cartItem[]
} 


const getInitialCartItem=():cartItem[]=>{
try {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  } catch (error) {
    console.error("Failed to parse cart items from localStorage", error);
  }
  return [];
};


const initialState: CartItemsState = {
  cartItems:getInitialCartItem()
}


export const bookSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state:CartItemsState,action:PayloadAction<book>) => {
      let Item:cartItem | undefined
      Item=state.cartItems.find((item:cartItem)=>item.cartItem.id===action.payload.id)
      Item ?  (Item.qty+=1) : state.cartItems.push({cartItem:action.payload,qty:1})
      localStorage.setItem('cart',JSON.stringify(state.cartItems))
      },
      increment:(state:CartItemsState,action:PayloadAction<number>)=>{
        let Item:cartItem | undefined
        Item=state.cartItems.find((item:cartItem)=>item.cartItem.id===action.payload) 
        Item ? (Item.qty+=1) : Item
         localStorage.setItem('cart',JSON.stringify(state.cartItems))
      },
      decrement:(state:CartItemsState,action:PayloadAction<number>)=>{
          let Item:cartItem | undefined
          Item=state.cartItems.find((item:cartItem)=>item.cartItem.id===action.payload) 
          Item && Item.qty>0 ?  (Item.qty-=1) : Item
          localStorage.setItem('cart',JSON.stringify(state.cartItems))
      },
      removeItem: (state:CartItemsState,action:PayloadAction<number>) => {
        state.cartItems=state.cartItems.filter((item:cartItem)=>item.cartItem.id!==action.payload)
        localStorage.setItem('cart',JSON.stringify(state.cartItems))
     },
  },
})

export const { addItem,increment,decrement,removeItem } = bookSlice.actions
export default bookSlice.reducer