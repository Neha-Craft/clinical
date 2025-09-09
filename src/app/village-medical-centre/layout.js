import VillageHeader from "@/components/villageHeader";
import { ScrollProvider } from "@/components/scrollContext";
import VillageFooter from "@/components/villagemedical/villageFooter";

export default function SomeFolderLayout({ children }) {
  return (
    <section>
      <ScrollProvider>
        <VillageHeader />

        {children}
        <VillageFooter />
      </ScrollProvider>
    </section>
  );
}
