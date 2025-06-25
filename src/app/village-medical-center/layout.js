"use client"
import VillageHeader from "@/components/villageHeader";

export default function SomeFolderLayout({ children }) {
  return (
    <section>
           <VillageHeader />

      {children}
    </section>
  )
}




// export default function SomeFolderLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-white min-h-screen flex flex-col">
//         <VillageHeader />
//         <main className="flex-1 p-6">{children}</main>
//       </body>
//     </html>
//   );
// }
