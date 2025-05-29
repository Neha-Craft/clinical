import Header from "@/components/header"
import Footer from "@/components/footer"

import ClientOnlyWrapper from "@/components/clientOnlyWrapper"
import About from "@/components/about"
import Services from "@/components/services"
import Contactus from "@/components/contactus"
import HomePage from "@/components/home"
import Faqsection from "@/components/faqsection"
import DoctorList from "@/components/doctorList"
import Servicesection from "@/components/servicesection"

export default function Home() {
  return (
    <div>
   {/* <ClientOnlyWrapper> */}
       

       {/* <main className="main">  */}
     
        <HomePage/>
        <Servicesection/>
       

      
         <About/>
      


      <Services/>
      <DoctorList/>
      <Faqsection/>

    
         <Contactus/>   
     
       {/* </main>  */}

   




























































   
    {/* </ClientOnlyWrapper>  */}
    </div>
  )
}
