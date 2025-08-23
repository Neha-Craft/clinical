"use client"
import Header from "../../components/header";
import Footer from "../../components/footer";
import { ScrollProvider } from "@/components/scrollContext";


export default function SomeFolderLayout({ children }) {
  return (
    <section>
                <ScrollProvider>
    
              <Header /> 

      {children}
    <Footer/>
    </ScrollProvider>

    </section>
  )
}


