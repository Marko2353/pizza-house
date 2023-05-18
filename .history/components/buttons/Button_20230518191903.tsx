import Link from 'next/link'
import React from 'react'

const Button = ({ nombre, enlace }) => {
  return (
    <Link to={enlace}>
      <button style={{
        backgroundColor: '#1e40af',
        color: '#ffffff',
        fontWeight: 'bold',
        padding: '10px 20px',
        borderRadius: '4px',
        textDecoration: 'none',
        marginTop: '10px',
        marginRight: '10px',
        border: 'none',
        cursor: 'pointer',
      }}>
        {nombre}
      </button>
    </Link>
  );
};

export default Button;