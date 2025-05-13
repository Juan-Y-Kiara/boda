import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Scroll to RSVP function
  const scrollToRsvp = () => {
    // Find the RsvpForm element by its ID
    const rsvpElement = document.getElementById('rsvp');
    
    if (rsvpElement) {
      // Smooth scroll to the element
      rsvpElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback if element not found - scroll to a specific location
      window.location.hash = '#/rsvp';
    }
  };

  useEffect(() => {
    // Intenta reproducir automáticamente cuando el componente se monte
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Volumen al 40%
      
      // Intenta la reproducción automática
      const playPromise = audioRef.current.play();
      
      // La reproducción automática puede fallar, así que manejamos esa posibilidad
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Reproducción automática exitosa
            setIsPlaying(true);
          })
          .catch(error => {
            // La reproducción automática fue bloqueada por el navegador
            console.log("Autoplay prevented:", error);
            setAutoplayBlocked(true);
          });
      }
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setAutoplayBlocked(false);
            })
            .catch(error => {
              console.log("Play prevented:", error);
            });
        }
      }
    }
  };

  const restartMusic = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reinicia la canción
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log("Restart prevented:", error);
          });
      }
    }
  };

  // Detector para cuando la canción termina (si por alguna razón el loop no funciona)
  useEffect(() => {
    const handleEnded = () => {
      if (audioRef.current) {
        restartMusic();
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Audio Element - hidden from view */}
      <audio 
        ref={audioRef} 
        src="music/wedding-song.mp3" // Ajusta la ruta a tu archivo de música
        loop 
      />
      
      {/* Music Control Button */}
      <div className="absolute top-6 right-6 z-20 flex items-center space-x-2">
        {autoplayBlocked && !isPlaying && (
          <div className="bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            Haz clic para escuchar música
          </div>
        )}
        
        <button 
          onClick={toggleMusic}
          className="bg-wedding-primary bg-opacity-70 hover:bg-opacity-100 text-white p-3 rounded-full transition-all duration-300"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            // Pause icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            // Play icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
        
        {/* Restart button for when the song finishes */}
        {isPlaying && (
          <button
            onClick={restartMusic}
            className="bg-wedding-primary bg-opacity-70 hover:bg-opacity-100 text-white p-3 rounded-full transition-all duration-300 ml-2"
            aria-label="Reiniciar música"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20L20 4" />
            </svg>
          </button>
        )}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h4 className="font-script text-3xl md:text-4xl text-wedding-accent mb-2 animate-float">
          Nos casamos
        </h4>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide">
          Kiara & Juan
        </h1>
        <p className="text-xl text-wedding-accent mb-8">
          23 | Mayo | 2025 - 5:00 pm
        </p>
        <div className="w-32 h-0.5 bg-wedding-primary mx-auto"></div>
        <p className="mt-8 text-lg text-white max-w-2xl mx-auto">
          Les invitamos a acompañarnos en este día tan especial donde celebraremos nuestro amor
        </p>
        <button
          onClick={scrollToRsvp}
          className="mt-10 inline-block px-8 py-3 border-2 border-wedding-primary text-wedding-accent hover:bg-wedding-primary hover:text-white transition-colors"
        >
          Confirmar Asistencia
        </button>
      </div>
    </section>
  );
};

export default Hero;