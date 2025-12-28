import Footer from "./footer/index"
import Header from "./header/index"

interface children{
  children:React.ReactNode
}

function Layout({children}:children){
  return(
    <div>
        <Header />
            {children}
        <Footer/>    
    </div>
  )
}

export default Layout