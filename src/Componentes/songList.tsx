
import { ReactNode } from 'react';

import styles from '../estilos/songList.module.css'

/*interface Song {
  id: string;  
  image: string;
  title: string;
  artist: string;
}

interface SongListProps {
  songs: Song[];
}

function SongList({ songs }: SongListProps) {
  return (
    <div className={styles['songList']}>
      {songs.map((song) => (
        <SongCard
          key={song.id}  
          image={song.image}
          title={song.title}
          artist={song.artist}
        />
      ))}
    </div>
  );
}

export default SongList;*/

interface  SongListprops {
  children:ReactNode
}

function SongList ({ children }:SongListprops){
  return <div className={styles['songList']}>{children}</div>;
}
export default SongList;