
import React, { useState } from 'react';
import styles from '../estilos/playlistForm.module.css'; 

interface PlaylistFormProps {
    onAddPlaylist: (playlist: { title: string, description: string, photo: string }) => void;
  }
  
  const PlaylistForm: React.FC<PlaylistFormProps> = ({ onAddPlaylist }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (title && description && photo) {
        onAddPlaylist({ title, description, photo });
        setTitle('');
        setDescription('');
        setPhoto('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className={styles.playlistForm}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Título:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className={styles.formInput} 
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Descripción:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className={styles.formTextarea} 
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Imagen (URL):</label>
          <input 
            type="text" 
            value={photo} 
            onChange={(e) => setPhoto(e.target.value)} 
            className={styles.formInput} 
          />
        </div>
        <button 
          type="submit" 
          disabled={!title || !description || !photo}
        >
          Agregar Playlist
        </button>
      </form>
    );
  };
  
  export default PlaylistForm;
