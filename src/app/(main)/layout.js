"use client"
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function SomeFolderLayout({ children }) {
  return (
    <section>
    
              <Header /> 

      {children}
    <Footer/>

    </section>
  )
}


