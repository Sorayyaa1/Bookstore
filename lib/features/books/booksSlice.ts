"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { book } from '@/pages/Context'
import { useEffect } from 'react';


interface cartItem{
  cartItem:book
}

export interface CartItemType{
  CartItem:cartItem
  qty:number
}

export interface CartItemsState {
  cartItems: CartItemType[]
} 

const getInitialCartItem=():CartItemType[]=>{
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
    addItem: (state:CartItemsState,action:PayloadAction<CartItemType>) => {
      let Item:CartItemType | undefined
      Item=state.cartItems.find((item:CartItemType)=>item.CartItem.cartItem.id===action.payload.CartItem.cartItem.id) 
      Item ? ( {...state,cartItems:state.cartItems.map((item:CartItemType)=>(
        item.CartItem.cartItem.id===action.payload.CartItem.cartItem.id ? ({...item,qty:item.qty+1}) : item
      ))}) : ({
        cartItems:[...state.cartItems,{...action.payload,qty:1}]
      })
      localStorage.setItem('cart',JSON.stringify(state))
      },
      increment:(state:CartItemsState,action:PayloadAction<number>)=>{
        let Item:CartItemType | undefined
        Item=state.cartItems.find((item:CartItemType)=>item.CartItem.cartItem.id===action.payload) 
        Item ? ({...state && {...Item,qty:Item.qty+1}} ) : Item
        localStorage.setItem('cart',JSON.stringify(state))
      },
      decrement:(state:CartItemsState,action:PayloadAction<number>)=>{
          let Item:CartItemType | undefined
          Item=state.cartItems.find((item:CartItemType)=>item.CartItem.cartItem.id===action.payload) 
          Item ? ({...state && {...Item,qty:Item.qty-1}}) : Item
          localStorage.setItem('cart',JSON.stringify(state))
      },
      removeItem: (state:CartItemsState,action:PayloadAction<number>) => {
        ({...state,cartItems:state.cartItems.filter((item:CartItemType)=>item.CartItem.cartItem.id===action.payload)})
        localStorage.setItem('cart',JSON.stringify(state))
     },
  }
})

export const { addItem,increment,decrement,removeItem } = bookSlice.actions
export const selectCount = (state: RootState) => state.cart.cartItems
export default bookSlice.reducer