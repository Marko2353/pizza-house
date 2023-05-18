import Link from 'next/link'
import React from 'react'

export default function Button({ nombre, enlace }) {
  <Link to={enlace} style={{ 
    backgroundColor: '#1e40af',
    color: '#ffffff',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '10px',
    marginRight: '10px',
  }}>
    {nombre}
  </Link>
);
};