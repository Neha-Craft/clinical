
import GreenHeader from "@/components/greenwoosurgery/greenheader";
import VillageHeader from "@/components/villageHeader";
import { ScrollProvider } from "@/components/scrollContext";

export default function SomeFolderLayout({ children }) {
  return (
    <section>
          <ScrollProvider>
           <GreenHeader/>

      {children}
      </ScrollProvider>
    </section>
  )
}


