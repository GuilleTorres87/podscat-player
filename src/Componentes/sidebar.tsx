

import PlaylistForm from './playListForm.tsx'
import styles from '../estilos/sideBar.module.css'; 

interface Playlist {
    title: string;
    description: string;
    photo: string;
  }
  
  interface SidebarProps {
    showForm: boolean;
    onToggleForm: () => void;
    playlists: Playlist[];
    onAddPlaylist: (playlist: Playlist) => void;
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ showForm, onToggleForm, playlists, onAddPlaylist }) => {
    return (
      <div className={styles.sidebar}>
        <div className='logo'>
            <img src="src/img/music.png" alt="tube" />
        </div>
        <button>Home</button>
        <button onClick={onToggleForm}>
          {showForm ? 'Cerrar Formulario' : 'Nueva Playlist'}
        </button>
        
        {showForm && <PlaylistForm onAddPlaylist={onAddPlaylist} />}
        <div className={styles.playlistList}>
          {playlists.map((playlist, index) => (
            <div key={index} className={styles.playlistItem}>
              <img src={playlist.photo} alt={playlist.title} />
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;
