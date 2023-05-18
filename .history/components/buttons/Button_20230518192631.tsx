import Link from "next/link";
import React from "react";

const Button = ({ name, link }) => {
  return (
    <Link href={link}>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {name}
      </a>
    </Link>
  );
};

export default Button;
