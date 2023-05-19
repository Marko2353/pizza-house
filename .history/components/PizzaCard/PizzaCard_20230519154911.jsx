import React from 'react'
import Image from "next/image";

export default function PizzaCard() {
  return (
    <div className='bg-light inline-block'>
        <h2 className='text-3xl mx-auto'>Margaritta</h2>
        <Image src="/public/img/pizza_example.png" alt="" />
        <p></p>
    </div>
  )
}


