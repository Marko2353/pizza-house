import Link from "next/link";
import React from "react";
import "../../app/globals.css";

export default function CallToAction({ name, link, active }) {
  return (
    <Link href={link} className={`call-to-action box-shadow ${active}`}>
      {name}
    </Link>
  );
}
