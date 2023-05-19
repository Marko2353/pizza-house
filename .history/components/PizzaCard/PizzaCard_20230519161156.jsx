import React from 'react'
import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";
export default function PizzaCard() {
  return (
    <div className='bg-light inline-block'>
        
        <h2 className='text-3xl mx-auto mb-8 my-2 text-center'>Margaritta</h2>
        <Image className='mb-8' src={PizzaImg} alt="" />
        
        <p className='mb-4 mx-2'>Tomato, mozzarella and basil</p>
    </div>
  )
}


