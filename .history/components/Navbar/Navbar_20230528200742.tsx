import CallToAction from "../buttons/CallToAction";
import Logo from "../../public/img/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from 'next/router';

export default function NavBar({background}) {
  // const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className={`w-full h-24 flex absolute z-50 ${background}`}>
      <div className="container flex items-center justify-between m-auto">
        <Link href={"/"}>
          <Image src={Logo} alt="" />
        </Link>
        <ul className="flex items-center gap-5 uppercase text-light">

          <li className={currentRoute === "/" ? "text-secondary" : "hover:text-secondary"}>
            <Link href={"/"}>home</Link>
          </li>
          <li className="hover:text-secondary">
            <Link href={"/ourpizza"}>our pizza</Link>
          </li>
          <li className="hover:text-secondary">
            <Link href={"/about"}>about</Link>
          </li>
          <li className="hover:text-secondary">
            <Link href={"/contact"}>contact</Link>
          </li>
          <div className="flex gap-3 ml-4">
            <CallToAction name={"order takeaway"} link={"/takeaway"} />
            <CallToAction name={"book now"} link={"booking"} />
          </div>
        </ul>
      </div>
    </nav>

  );
}
