import { Link } from 'react-router-dom';
import React from 'react'

export default function Button() {
  return (
    <Link to="/pizzas" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Ir a Pizzas
    </Link>
  )
}
