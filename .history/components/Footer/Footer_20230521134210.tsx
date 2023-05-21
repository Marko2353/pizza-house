import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
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
import map from "../../public/img/map.jpg";

export default function Footer() {
  return (
    <footer className="w-full bg-dark">
      <div className="container flex justify-between m-auto py-12">
        <div>
          <h3 className="mb-4">Menu</h3>
          <ul className="uppercase flex flex-col gap-3">
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
              <CallToAction name={"order takeaway"} link={"/takeaway"} />
            </li>

            <li className="text-sm">
              <CallToAction name={"book a table"} link={"/booking"} />
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4">Social Media</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-light">
              <Link target="_blank" className="flex gap-3 items-center text-xs" href={"https://instagram.com/"}>
                <FontAwesomeIcon
                  className="text-xl"
                  icon={faInstagram}
                  style={{ color: "#f5f5f5" }}
                />{" "}
                @PizzaHouse
              </Link>
            </li>
            <li className="text-light">
              <Link className="flex gap-3 items-center text-xs" href={"#"}>
                <FontAwesomeIcon
                  className="text-xl"
                  icon={faFacebook}
                  style={{ color: "#f5f5f5" }}
                />{" "}
                @PizzaHouse
              </Link>
            </li>
            <li className="text-light">
              <Link className="flex gap-3 items-center text-xs" href={"#"}>
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
          <ul className="text-light flex flex-col gap-3 text-xs">
            <li>Mon: 8:00 - 20:00</li>
            <li>Tue: 8:00 - 20:00</li>
            <li>Wed: 8:00 - 20:00</li>
            <li>Thu: 8:00 - 20:00</li>
            <li>Fri: 8:00 - 20:00</li>
            <li>Sat: 8:00 - 20:00</li>
            <li>Sun: 8:00 - 20:00</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4">Address</h3>
          <Image className="rounded-xl box-shadow" src={map} alt="" />
        </div>
      </div>
    </footer>
  );
}
