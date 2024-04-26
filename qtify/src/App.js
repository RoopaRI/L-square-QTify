import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./components/api/api";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const generateData = async () => {
    try {
      let res = await fetchTopAlbums();
      setTopAlbums(res);
      res = await fetchNewAlbums();
      setNewAlbums(res);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    generateData();
  }, []);

  return (
    <>
      <HomePage topAlbums={topAlbums} newAlbums={newAlbums}/> 
    </>
  );
}
