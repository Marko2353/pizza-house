import React from 'react';
import { useRouter } from 'next/router';

export default function NavBar({ background }) {
  const router = useRouter();

  const isActivePage = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <nav className={`w-full h-24 flex absolute z-50 ${background}`}>
      <div className="container flex items-center justify-between m-auto">
        {/* Resto del código... */}

        <ul className="flex items-center gap-5 uppercase text-light">
          <li className={`${isActivePage('/') ? 'text-green-500' : ''} hover:text-secondary`}>
            <Link href="/">home</Link>
          </li>
          <li className={`${isActivePage('/ourpizza') ? 'text-green-500' : ''} hover:text-secondary`}>
            <Link href="/ourpizza">our pizza</Link>
          </li>
          <li className={`${isActivePage('/about') ? 'text-green-500' : ''} hover:text-secondary`}>
            <Link href="/about">about</Link>
          </li>
          <li className={`${isActivePage('/contact') ? 'text-green-500' : ''} hover:text-secondary`}>
            <Link href="/contact">contact</Link>
          </li>
          {/* Resto del código... */}
        </ul>
      </div>
    </nav>
  );
}
