import { useState } from 'react'

import './App.css'

import SongList from './Componentes/songList.tsx'
import SongCard from './Componentes/songCard.tsx'
import QuickPicks from './Componentes/quickPicks.tsx'
import PlaybackBar from './Componentes/playBackBar.tsx'
import Sidebar from './Componentes/sidebar.tsx'





const songs = [
  {id:'1',image: "/src/img/sodaEstereo.jpg",title: 'Zoom', artist: 'Soda Estereo'},
  {id:'2',image: "/src/img/artaud.jpg",title: 'Bajan',artist: 'Pescado Rabioso'},
  {id:'3',image: "/src/img/paez.webp",title: 'Dos en la ciudad',artist: 'Fito Paez'},
  {id:'4',image: "/src/img/ataque.jpg",title: 'Ataque 77',artist: 'El cielo puede esperar'},
  {id:'5',image: "/src/img/rodriguez.jpg",title: 'Sin documentos',artist: 'Los Rodriguez'},
  {id:'6',image: "/src/img/divididos.webp",title: 'Spagueti del rock',artist: 'Divididos'},
  {id:'19',image: "/src/img/sodaEstereo.jpg",title: 'Zoom', artist: 'Soda Estereo'},
  {id:'20',image: "/src/img/artaud.jpg",title: 'Bajan',artist: 'Pescado Rabioso'},
  ];

const quickPicks = [
  {id:'7',image: "/src/img/sodaEstereo.jpg",title: 'Zoom', artist: 'Soda Estereo'},
  {id:'8',image: "/src/img/artaud.jpg",title: 'Bajan',artist: 'Pescado Rabioso'},
  {id:'9',image: "/src/img/paez.webp",title: 'Dos en la ciudad',artist: 'Fito Paez'},
  {id:'10',image: "/src/img/ataque.jpg",title: 'Ataque 77',artist: 'El cielo puede esperar'},
  {id:'11',image: "/src/img/rodriguez.jpg",title: 'Sin documentos',artist: 'Los Rodriguez'},
  {id:'12',image: "/src/img/divididos.webp",title: 'Spagueti del rock',artist: 'Divididos'},
  {id:'13',image: "/src/img/sodaEstereo.jpg",title: 'Zoom', artist: 'Soda Estereo'},
  {id:'14',image: "/src/img/artaud.jpg",title: 'Bajan',artist: 'Pescado Rabioso'},
  {id:'15',image: "/src/img/paez.webp",title: 'Dos en la ciudad',artist: 'Fito Paez'},
  {id:'16',image: "/src/img/ataque.jpg",title: 'Ataque 77',artist: 'El cielo puede esperar'},
  {id:'17',image: "/src/img/rodriguez.jpg",title: 'Sin documentos',artist: 'Los Rodriguez'},
  {id:'18',image: "/src/img/divididos.webp",title: 'Spagueti del rock',artist: 'Divididos'},
  ];

function App(){
  const [showForm, setShowForm] = useState(false);
  const [playlists, setPlaylists] = useState<Array<{ title: string, description: string, photo: string }>>([]);

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleAddPlaylist = (playlist: { title: string, description: string, photo: string }) => {
    setPlaylists([...playlists, playlist]);
    setShowForm(false); 
  };
  return(
    <div>
      
      <Sidebar
       showForm={showForm}
       onToggleForm={handleToggleForm}
       playlists={playlists}
       onAddPlaylist={handleAddPlaylist}
      />
      
      <div className='listen'>
        <img src="src/img/perfil.jpg" alt="" />
        <div>
          <h1>Listen Again</h1>
          <small>listen again</small>
        </div>
      </div>
      <SongList>
      {songs.map((song) => (
        <SongCard
          key={song.id}
          image={song.image}
          title={song.title}
          artist={song.artist}
        />
      )
    )}
    </SongList>

    <div className='quick'>
        <img src="src/img/perfil.jpg" alt="" />
        <div>
          <h1>Quick Picks</h1>
          <small>Quick Picks</small>
        </div>
      </div>
      <SongList>
      {quickPicks.map((quick) => (
        <QuickPicks
          key={quick.id}
          image={quick.image}
          title={quick.title}
          artist={quick.artist}
        />
      )
    )}
    </SongList>

    
    <PlaybackBar />
    
    </div>
    
  )
}

export default App;
