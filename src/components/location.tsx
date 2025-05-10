import React from "react";

const Location = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-8">Ubicación</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        
        <div className="text-center mb-8">
          <h3 className="text-xl font-medium mb-2">Casa club "EL SOL"</h3>
          <p className="text-gray-700 mb-6">
            Av. El Sol 527, San Carlos, San Juan de Lurigancho, Lima, Perú.
          </p>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Referencia: A 2 cuadras de la Estación San Carlos (Línea 1 del Metro de Lima), cruce con
            Av. Lima. A dos casas del grifo Primax en dirección de la Estación San Carlos.
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9408943971267!2d-77.00438028255616!3d-11.986027899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c58bd5f5a08d%3A0x10f2a99824d605a7!2sAv.%20El%20Sol%20527%2C%20San%20Juan%20de%20Lurigancho%2015419%2C%20Peru!5e0!3m2!1sen!2sus!4v1695949668094!5m2!1sen!2sus"
            width="100%" 
            height="450" 
            className="border-0" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;