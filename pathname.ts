import { usePathname } from "next/navigation";

export default function Pathnames() {
  const pathname = usePathname();
  return { pathname };
}
