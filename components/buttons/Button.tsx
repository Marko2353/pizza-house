import Link from "next/link";
import React from "react";

export default function Button({ name, link }) {
  return (
    <Link href={link}>
      <button className="bg-primary text-white font-bold py-2 px-4 uppercase rounded-xl">
        {name}
      </button>
    </Link>
  );
}
