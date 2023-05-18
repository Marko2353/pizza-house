import Link from "next/link";
import React from "react";

export default function Button({ name, link }) {
  return (
    <Link href={link}>
      <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {name}
      </button>
    </Link>
  );
}