"use client"
import GreenHeader from "@/components/greenwoosurgery/greenheader";
import Kilmoneyheader from "@/components/kilmoneyclinic/kilmoneyheader";
import VillageHeader from "@/components/villageHeader";

export default function SomeFolderLayout({ children }) {
  return (
    <section>
           <Kilmoneyheader/>

      {children}
    </section>
  )
}


