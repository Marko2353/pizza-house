import Link from "next/link";
import React from "react";

const Button = ({ nombre, enlace }) => {
  return (
    <Link href={enlace}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {nombre}
      </button>
    </Link>
  );
};

export default Button;
