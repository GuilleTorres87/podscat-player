
import styles from '../estilos/songCard.module.css';

interface SongCardProps {
  image: string;
  title: string;
  artist: string;
}

function SongCard({ image, title, artist }: SongCardProps) {
  return (
    <div className={styles['songCard']}>
      <img src={image} alt={title} className={styles['songImage']} />
      <div className={styles['songInfo']}>
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
}

export default SongCard;

