
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CountdownTimer from "@/components/CountdownTimer";
import EventDetails from "@/components/EventDetails";
import Regalos from "@/components/regalos";
import Gallery from "@/components/Gallery";
import RsvpForm from "@/components/RsvpForm";
import Location from "@/components/location"; // Import the new Location component
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-accent">
      <Header />
      <Hero />
      <CountdownTimer />
      <Gallery />
      <EventDetails />
      <RsvpForm />
      <Regalos />
      <Location /> {/* Add the Location component here */}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;