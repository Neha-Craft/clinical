
import GreenHeader from "@/components/greenwoosurgery/greenheader";
import VillageHeader from "@/components/villageHeader";

export default function SomeFolderLayout({ children }) {
  return (
    <section>
           <GreenHeader/>

      {children}
    </section>
  )
}


