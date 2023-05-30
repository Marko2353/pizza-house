import Logo from "../../public/img/Logo.svg";
import Image from "next/image";
import CallToAction from "../buttons/CallToAction";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full bg-dark">
      <div className="container flex justify-between py-12 m-auto">
        <div>
          <h3 className="mb-4">Menu</h3>
          <ul className="flex flex-col gap-3 uppercase">
            <li className="text-light">
              <Link className="text-xs" href={"/"}>
                home
              </Link>
            </li>
            <li className="text-light">
              <Link className="text-xs" href={"/ourpizza"}>
                our pizza
              </Link>
            </li>
            <li className="text-light">
              <Link className="text-xs" href={"/about"}>
                about us
              </Link>
            </li>
            <li className="text-light">
              <Link className="text-xs" href={"/contact"}>
                contact us
              </Link>
            </li>
            <li className="text-sm">
              <CallToAction
                name={"order takeaway"}
                link={"/takeaway"}
                active={""}
              />
            </li>

            <li className="text-sm">
              <CallToAction
                name={"book a table"}
                link={"/booking"}
                active={""}
              />
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4">Social Media</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-light">
              <Link
                target="_blank"
                className="flex items-center gap-3 text-xs"
                href={"https://instagram.com/"}
              >
                <FontAwesomeIcon
                  className="text-xl"
                  icon={faInstagram}
                  style={{ color: "#f5f5f5" }}
                />{" "}
                @PizzaHouse
              </Link>
            </li>
            <li className="text-light">
              <Link className="flex items-center gap-3 text-xs" href={"#"}>
                <FontAwesomeIcon
                  className="text-xl"
                  icon={faFacebook}
                  style={{ color: "#f5f5f5" }}
                />{" "}
                @PizzaHouse
              </Link>
            </li>
            <li className="text-light">
              <Link className="flex items-center gap-3 text-xs" href={"#"}>
                <FontAwesomeIcon
                  className="text-xl"
                  icon={faTwitter}
                  style={{ color: "#f5f5f5" }}
                />{" "}
                @PizzaHouse
              </Link>
            </li>
            <li>
              <Link href={"#"}></Link>
            </li>
            <li>
              <Link href={"#"}></Link>
            </li>
          </ul>
        </div>

        <Image src={Logo} alt="" />

        <div>
          <h3 className="mb-4">Opening Hours</h3>
          <ul className="flex flex-col gap-3 text-xs text-light">
            <li>Mon: 8:00 - 20:00</li>
            <li>Tue: 8:00 - 20:00</li>
            <li>Wed: 8:00 - 20:00</li>
            <li>Thu: 8:00 - 20:00</li>
            <li>Fri: 8:00 - 20:00</li>
            <li>Sat: 8:00 - 20:00</li>
            <li>Sun: 8:00 - 20:00</li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71903.55643432608!2d12.490188388768793!3d55.72399305731688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524e6d778cb02b%3A0x7e3ab7668df86d7c!2sCphbusiness%20Lyngby!5e0!3m2!1sen!2sdk!4v1685450184234!5m2!1sen!2sdk"
          width="250"
          height="250"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}
