import React from "react";
import Logo from "../../public/img/Logo.svg";
import CallToAction from "../buttons/CallToAction";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import MapContainer from "./MapContainer";

export default function Footer() {
  return (
    <footer className="w-full bg-dark">
      <div className="container flex justify-between m-auto py-12">
        <div>
          <h3 className="mb-4">Menu</h3>
          {/* ...rest of your code... */}
        </div>

        <div>
          <h3 className="mb-4">Social Media</h3>
          {/* ...rest of your code... */}
        </div>

        <Logo />

        <div>
          <h3 className="mb-4">Opening Hours</h3>
          {/* ...rest of your code... */}
        </div>

        <div>
          <h3 className="mb-4">Address</h3>
          <MapContainer />
        </div>
      </div>
    </footer>
  );
}
