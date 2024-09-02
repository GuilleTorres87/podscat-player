import styles from '../estilos/quick.module.css';

interface quickPicksProps {
  image: string;
  title: string;
  artist: string;
}

function QuickPicks({ image, title, artist }: quickPicksProps) {
  return (
    <div className={styles['quickPicks']}>
      <img src={image} alt={title} className={styles['quickImage']} />
      <div className={styles['quickInfo']}>
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
}

export default QuickPicks;