
import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageSquare } from "lucide-react";

const RsvpForm = () => {
  const { toast } = useToast();

  const handleCallClick = (name: string, number: string) => {
    window.location.href = `tel:${number}`;
    toast({
      title: `Llamando a ${name}`,
      description: `Marcando al número ${number}...`,
    });
  };

  const handleWhatsAppClick = (name: string, number: string) => {
    const whatsappUrl = `https://wa.me/${number}?text=Hola%20${encodeURIComponent(name)},%20quiero%20confirmar%20mi%20asistencia%20a%20la%20boda.`;
    window.open(whatsappUrl, '_blank');
    toast({
      title: `Enviando mensaje a ${name}`,
      description: "Abriendo WhatsApp...",
    });
  };

  return (
    <section id="rsvp" className="py-16 bg-wedding-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-6">Confirma tu Asistencia</h2>
        <div className="w-24 h-0.5 bg-wedding-primary mx-auto mb-10"></div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg">
            Nos encantaría celebrar este día contigo. Por favor, confirma tu asistencia lo 
            antes posible para que podamos tener todo preparado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-serif mb-4">Novia: Tila Kiara</h3>
            <p className="text-lg mb-6">Teléfono: 981246184</p>
            
            <div className="flex flex-col gap-4">
              <Button 
                onClick={() => handleCallClick("Tila", "981246184")}
                className="bg-wedding-primary hover:bg-wedding-primary/90 text-white flex items-center justify-center gap-2 py-2 rounded-full px-8"
              >
                <Phone className="h-5 w-5" /> Llamar
              </Button>
              
              <Button 
                onClick={() => handleWhatsAppClick("Tila", "981246184")}
                className="bg-wedding-primary hover:bg-wedding-primary/90 text-white flex items-center justify-center gap-2 py-2 rounded-full px-8"
              >
                <MessageSquare className="h-5 w-5" /> WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-serif mb-4">Novio: Juan Jesús</h3>
            <p className="text-lg mb-6">Teléfono: 985633194</p>
            
            <div className="flex flex-col gap-4">
              <Button 
                onClick={() => handleCallClick("Juan", "985633194")}
                className="bg-wedding-primary hover:bg-wedding-primary/90 text-white flex items-center justify-center gap-2 py-2 rounded-full px-8"
              >
                <Phone className="h-5 w-5" /> Llamar
              </Button>
              
              <Button 
                onClick={() => handleWhatsAppClick("Juan", "985633194")}
                className="bg-wedding-primary hover:bg-wedding-primary/90 text-white flex items-center justify-center gap-2 py-2 rounded-full px-8"
              >
                <MessageSquare className="h-5 w-5" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg">Por favor confirmar antes del 17 de Mayo, 2025</p>
        </div>
      </div>
    </section>
  );
};

export default RsvpForm;
