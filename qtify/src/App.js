import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./components/api/api";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomePage /> 
    </>
  );
}
