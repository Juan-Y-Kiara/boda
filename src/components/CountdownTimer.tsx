
import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("May 23, 2025 17:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="py-16 bg-wedding-light bg-opacity-90 relative bg-cover bg-center"       style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('wedding-gallery/cuenta.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-6">Cuenta Regresiva</h2>
        <div className="w-24 h-1 bg-wedding-primary mx-auto mb-10"></div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-800 bg-opacity-70 flex flex-col items-center justify-center rounded-sm">
            <div className="text-4xl md:text-6xl font-serif">{timeLeft.days}</div>
            <div className="text-sm uppercase tracking-wide">DÍAS</div>
          </div>
          
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-800 bg-opacity-70 flex flex-col items-center justify-center rounded-sm">
            <div className="text-4xl md:text-6xl font-serif">{timeLeft.hours}</div>
            <div className="text-sm uppercase tracking-wide">HORAS</div>
          </div>
          
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-800 bg-opacity-70 flex flex-col items-center justify-center rounded-sm">
            <div className="text-4xl md:text-6xl font-serif">{timeLeft.minutes}</div>
            <div className="text-sm uppercase tracking-wide">MINUTOS</div>
          </div>
          
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-800 bg-opacity-70 flex flex-col items-center justify-center rounded-sm">
            <div className="text-4xl md:text-6xl font-serif">{timeLeft.seconds}</div>
            <div className="text-sm uppercase tracking-wide">SEGUNDOS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
