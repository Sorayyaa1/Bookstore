import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { AsyncLocalStorage } from 'async_hooks'

const localStorages=()=>{
  const Items=localStorage.getItem("cartItems")
  return Items ? JSON.parse(Items) : []
}

const saveLocalStorage=(state:any)=>{
  localStorage.setItem("cartItems",JSON.stringify(state.list))
}

export interface CartItemState {
  cartItems: JSON | []
}

const initialState: CartItemState = {
  cartItems: []
}

export const bookSlice = createSlice({
  name: 'books',
  initialState:{
    list:localStorages()
  },
  reducers: {
    addItem: state => {
      
    },
    removeItem: state => {
      
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      
    }
  }
})

export const { addItem, removeItem, incrementByAmount } = bookSlice.actions
export const selectCount = (state: RootState) => state.book
export default bookSlice.reducer