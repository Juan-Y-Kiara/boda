
import React from "react";

const Gallery = () => {
  const images = [
    "wedding-gallery/inicio.png",
    "wedding-gallery/viaje1.png",
    "wedding-gallery/viaje2.png",
    "wedding-gallery/viaje3.png",
    "wedding-gallery/viajes.png",
    "wedding-gallery/izam.jpg",
   
  ];

  return (
    <section id="galeria" className="py-16 bg-wedding-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-6">Nuestra Historia</h2>
        <div className="divider">
          <span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
            </svg>
          </span>
        </div>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src={image} 
                alt={`Wedding gallery image ${index + 1}`} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
