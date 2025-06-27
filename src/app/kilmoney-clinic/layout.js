"use client"
import GreenHeader from "@/components/greenwoosurgery/greenheader";
import Kilmoneyheader from "@/components/kilmoneyclinic/kilmoneyheader";
import VillageHeader from "@/components/villageHeader";
import { ScrollProvider } from "@/components/scrollContext";

export default function SomeFolderLayout({ children }) {
  return (
    <section>
         <ScrollProvider>
           <Kilmoneyheader/>

      {children}
      </ScrollProvider>
    </section>
  )
}


