import Link from 'next/link'
import React from 'react'

export default function Button({ nombre, enlace }) {
    <Link href={enlace}>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {nombre}
      </a>
    </Link>
  
};
