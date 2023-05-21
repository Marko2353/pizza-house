import React from "react";
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
          {/* ...rest of your code... */}
        </div>

        <div>
          <h3 className="mb-4">Social Media</h3>
          {/* ...rest of your code... */}
        </div>

        <Image src={Logo} alt="" />

        <div>
          <h3 className="mb-4">Opening Hours</h3>
          {/* ...rest of your code... */}
        </div>

        <div>
          <h3 className="mb-4">Address</h3>
          <iframe
            title="Map"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAJo2JODiQ6DbWhnpVEiJJbjBWaMtVacG0&q=YOUR_ADDRESS`}
            allowFullScreen
          />
        </div>
      </div>
    </footer>
  );
}
