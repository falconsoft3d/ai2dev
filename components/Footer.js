import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-500 text-center">
    <div className="container p-4">
        <h1>&copy; Ai2Dev</h1>
        <p>2022 - {new Date().getFullYear()}</p>
        <p>Marlon Falcón - All right Reserved - mfalconsoft@gmail.com</p>
    </div>  
  </footer>
  );
}
