"usec client"
import Logo from "../../public/img/Logo.svg";
import Image from "next/image";
import CallToAction from "../buttons/CallToAction";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Map from "./Map";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customMarkerIcon = new Icon({
  iconUrl: '/img/location.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});


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
        <MapContainer
      center={[55.6830888756627, 12.571898796390165]}
      zoom={13}
      style={{ height: '250px', width: '20%' }} 
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[55.6830888756627, 12.571898796390165]} icon={customMarkerIcon} />
    </MapContainer>
      </div>
    </footer>
  );
}
