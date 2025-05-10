
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-wedding-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-script text-3xl mb-4">Kiara & Juan</h2>
        <p className="mb-6">23 | Mayo | 2025</p>
        <p className="text-sm opacity-75">
          &copy; {new Date().getFullYear()} · Mi Boda · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
