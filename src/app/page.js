import Header from "@/components/header";
import Footer from "@/components/footer";

import Services from "@/components/services";
import Contactus from "@/components/contactus";
import HomePage from "@/components/home";
import Faqsection from "@/components/faqsection";
import DoctorList from "@/components/doctorList";
import Servicesection from "@/components/servicesection";
import Fees from "@/app/fees/page"

export default function Home() {
  return (
    <div>
      <Header />

      <HomePage />
      <Servicesection />
      <Fees/>

      <Services />

      <DoctorList />
      <Faqsection />

      <Contactus />
    </div>
  );
}
