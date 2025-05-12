
import React from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const EventDetails = () => {
  return (
    <section id="evento" className="py-16 bg-wedding-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-6">Detalles del Evento</h2>
        <div className="w-24 h-1 bg-wedding-primary mx-auto mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="relative h-64">
              <img 
                src="wedding-gallery/navidad3.png" 
                alt="Recepción" 
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full bg-wedding-primary flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 3.75A.75.75 0 016.75 3h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 3.75zm0 4A.75.75 0 016.75 7h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 7.75zM10.75 7a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zM10 11a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <CardContent className="pt-12 pb-6 text-center">
              <h3 className="text-2xl font-serif mb-4">Recepción</h3>
              
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-wedding-primary" />
                <span>23 de Mayo, 2025</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-wedding-primary" />
                <span>5:00 PM</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-wedding-primary" />
                <span>Casa club "EL SOL"</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-wedding-primary" />
                <span>Aforo máximo: 200 personas</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="relative h-64">
              <img 
                src="wedding-gallery/vestimenta.jpg" 
                alt="Vestimenta" 
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full bg-wedding-primary flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1a6 6 0 00-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 00.572.729 6.016 6.016 0 002.856 0A.75.75 0 0012 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0010 1zM8.863 17.414a.75.75 0 00-.226 1.483 9.066 9.066 0 002.726 0 .75.75 0 00-.226-1.483 7.553 7.553 0 01-2.274 0z" />
                </svg>
              </div>
            </div>
            <CardContent className="pt-12 pb-6 text-center">
              <h3 className="text-2xl font-serif mb-4">Vestimenta</h3>
              
              <div className="flex flex-col gap-2 mb-2">
                <div className="flex items-center justify-center gap-2">
                  <span>👗 Mujeres: Vestido Formal</span>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <span>👔 Hombres: Traje Formal</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <p className="text-center text-gray-600">
                Colores recomendados: Neutros y pasteles
              </p>
              
              <p className="text-center font-serif mt-4 text-lg">
                ¡Te esperamos para celebrar juntos!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
