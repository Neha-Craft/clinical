
import VillageHeader from "@/components/villageHeader";
import { ScrollProvider } from "@/components/scrollContext";

export default function SomeFolderLayout({ children }) {
  return (
    <section>
       <ScrollProvider>
           <VillageHeader />

      {children}
      </ScrollProvider>
    </section>
  )
}




