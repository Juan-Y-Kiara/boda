
import React, { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-wedding-light bg-opacity-95 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="font-script text-3xl text-wedding-primary">
            Kiara & Juan
          </a>
        </div>
        
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 text-wedding-secondary" />
        </button>
        
        <nav className={`${isOpen ? 'block absolute top-16 left-0 right-0 bg-white shadow-md p-4' : 'hidden'} md:block md:relative md:top-0 md:shadow-none md:p-0 md:bg-transparent`}>
          <ul className="md:flex md:space-x-8">
            <li className="py-2 md:py-0">
              <a href="#inicio" className="text-wedding-secondary hover:text-wedding-primary transition-colors">Inicio</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#evento" className="text-wedding-secondary hover:text-wedding-primary transition-colors">Evento</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#galeria" className="text-wedding-secondary hover:text-wedding-primary transition-colors">Galería</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#rsvp" className="text-wedding-secondary hover:text-wedding-primary transition-colors">RSVP</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
