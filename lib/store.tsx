import { configureStore } from '@reduxjs/toolkit';
import booksSlice from "../lib/features/books/booksSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      book: booksSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];