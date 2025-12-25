import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Components/Layout";
import BookProvider from "./Context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <BookProvider>
          <Component {...pageProps} />
        </BookProvider>
    </Layout>
  )
  
}
