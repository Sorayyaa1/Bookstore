import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Components/Patial/Layout";
import BookProvider from "./Context";
import { Provider } from "react-redux";
import {store} from "../lib/store"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <BookProvider>
      <Provider store={store} >
      <Layout>
        
          <Component {...pageProps} />
        
      </Layout>
      </Provider>
    </BookProvider>
    
  )
  
}
