import Link from "next/link";
import React from "react";

export default function Button({ name, link, func }) {
  return (
    <Link href={link}>
      <button onClick={func} className="bg-primary text-white font-bold py-2 px-4 uppercase rounded-xl box-shadow">
        {name}
      </button>
    </Link>
  );
}
