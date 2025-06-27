"use client";
import { usePathname } from "next/navigation";
import VillageHeader from "@/components/villageHeader";
// import Home2Header from "@/components/Home2Header";
// import Home3Header from "@/components/Home3Header";

export default function ClientHeaderSwitcher() {
  const pathname = usePathname();

  if (pathname.startsWith("/VillageHeader")) return <VillageHeader />;
//   if (pathname.startsWith("/home2")) return <Home2Header />;
//   if (pathname.startsWith("/home3")) return <Home3Header />;
  return null;
}
