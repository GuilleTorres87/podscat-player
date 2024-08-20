import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SongList from './Componentes/songList.tsx'



function App() {
  const songs = [
    {
      id:'1',
      image: "/src/img/sodaEstereo.jpg",
      title: 'Zoom',
      artist: 'Soda Estereo'
    },
    {
      id:'2',
      image: "/src/img/artaud.jpg",
      title: 'Bajan',
      artist: 'Pescado Rabioso'
    },
    {
      id:'3',
      image: "/src/img/paez.webp",
      title: 'Dos en la ciudad',
      artist: 'Fito Paez'
    },
    {
      id:'4',
      image: "/src/img/ataque.jpg",
      title: 'Ataque 77',
      artist: 'El cielo puede esperar'
    },
    {
      id:'5',
      image: "/src/img/rodriguez.jpg",
      title: 'Sin documentos',
      artist: 'Los Rodriguez'
    },
    {
      id:'6',
      image: "/src/img/divididos.webp",
      title: 'Spagueti del rock',
      artist: 'Divididos'
    },
    
  ];

  return (
    <div>
      <h1>Listen Again</h1>
      <SongList songs={songs} />
    </div>
  );
}

export default App;
