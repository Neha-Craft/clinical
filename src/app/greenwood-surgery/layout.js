
import GreenHeader from "@/components/greenwoosurgery/greenheader";
import VillageHeader from "@/components/villageHeader";
import { ScrollProvider } from "@/components/scrollContext";
import GreenFooter from "@/components/greenwoosurgery/greenFooter";

export default function SomeFolderLayout({ children }) {
  return (
    <section>
          <ScrollProvider>
           <GreenHeader/>

      {children}
      <GreenFooter/>
      </ScrollProvider>
    </section>
  )
}


