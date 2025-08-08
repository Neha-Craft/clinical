"use client";
import { usePathname } from "next/navigation";
import VillageHeader from "@/components/villageHeader";
export default function ClientHeaderSwitcher() {
  const pathname = usePathname();
  if (pathname.startsWith("/VillageHeader")) return <VillageHeader />;

  return null;
}
