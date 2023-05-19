import Link from "next/link";
import React from "react";
import "../../app/globals.css";

export default function CallToAction({ name, link }) {
  return (
    <Link href={link} className="bg-accent">
      {name}
    </Link>
  );
}
