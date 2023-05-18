import Link from 'next/link'
import React from 'react'

export default function Button() {
  return (
    <button
      className={`px-4 py-2 text-white rounded ${bgColorClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
