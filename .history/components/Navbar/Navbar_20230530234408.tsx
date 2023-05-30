"use client";
import CallToAction from "../buttons/CallToAction";
import Logo from "../../public/img/Logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function NavBar({ background }) {
  const pathname = usePathname();

  return (
    <nav className={`w-full h-24 flex absolute z-50 ${background}`}>
      <div className="container flex items-center justify-between m-auto">
        <Link href={"/"}>
          <Image src={Logo} alt="" />
        </Link>
        <ul className="flex items-center gap-5 uppercase text-light">
          <li className="hover:text-secondary">
            <Link
              href={"/"}
              className={
                pathname === `${"/"}` ? "text-secondary" : "text-light"
              }
            >
              home
            </Link>
          </li>
          <li className="hover:text-secondary">
            <Link
              href={"/ourpizza"}
              className={
                pathname.startsWith("/ourpizza")
                  ? "text-secondary"
                  : "text-light"
              }
            >
              our pizza
            </Link>
          </li>
          <li className="hover:text-secondary">
            <Link
              href={"/about"}
              className={
                pathname.startsWith("/about") ? "text-secondary" : "text-light"
              }
            >
              about
            </Link>
          </li>
          <li className="hover:text-secondary">
            <Link
              href={"/contact"}
              className={
                pathname.startsWith("/contact")
                  ? "text-secondary"
                  : "text-light"
              }
            >
              contact
            </Link>
          </li>
          <div className="flex gap-3 ml-4">
            <CallToAction
              name={"order takeaway"}
              link={"/takeaway"}
              active={
                pathname.startsWith("/takeaway") ? "bg-primary" : "text-light"
              }
            />
            <CallToAction
              name={"book now"}
              link={"/booking"}
              active={
                pathname.startsWith("/booking") ? "text-primary" : "text-light"
              }
            />
          </div>
        </ul>
      </div>
    </nav>
  );
}
