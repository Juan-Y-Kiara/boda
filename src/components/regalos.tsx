import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const GiftRegistry = () => {
  return (
    <section id="mesa-regalos" className="py-16 bg-wedding-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-6">Mesa de Regalos</h2>
        <div className="w-24 h-1 bg-wedding-primary mx-auto mb-10"></div>
        
        <div className="max-w-3xl mx-auto">
          {/* Gift Registry Message */}
          <div className="text-center mb-10">
            <p className="text-lg">
              El mejor regalo es vuestra compañía, pero si deseáis tener un detalle con
              nosotros, podéis hacerlo a través de las siguientes cuentas a nombre de Juan
              Jesús Vega More. ¡Muchas gracias!
            </p>
          </div>

          {/* Bank Accounts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BCP Account */}
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-wedding-primary flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4">BCP Soles</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">N° de Cuenta:</span> 19135569565051
                  </p>
                  <p>
                    <span className="font-semibold">CCI:</span> 00219113556956505152
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* BBVA Account */}
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-wedding-primary flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4">BBVA</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Cuenta Independencia</span>
                  </p>
                  <p>
                    <span className="font-semibold">N° de Cuenta:</span> 0011-0189-0200450646
                  </p>
                  <p>
                    <span className="font-semibold">CCI:</span> 011-189-000200450646-81
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;