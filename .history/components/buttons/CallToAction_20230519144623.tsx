import Link from "next/link";
import React from "react";
import "../../app/globals.css";

export default function CallToAction({ name, link }) {
  return (
    <Link href={link}>
      <button className="bg-accent text-white font-bold py-2 px-4 rounded">
        {name}
      </button>
    </Link>
  );
}
