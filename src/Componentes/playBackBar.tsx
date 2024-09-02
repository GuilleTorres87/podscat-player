
import styles from '../estilos/playBackBar.module.css';

function PlaybackBar() {
  return (
    <div className={styles.playbackBar}>
      <div className={styles.songInfo}>
        <img src="/src/img/artaud.jpg" alt="artaud" className={styles.songArtaud} />
        <div className={styles.songDetails}>
          <h3 className={styles.songTitle}>Song Title</h3>
          <p className={styles.songArtist}>Artist Name</p>
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.controlButton}>⏮</button>
        <button className={styles.controlButton}>⏯</button>
        <button className={styles.controlButton}>⏭</button>
      </div>
      <div className={styles.volumeControl}>
        <button className={styles.controlButton}>🔊</button>
        <input type="range" className={styles.volumeSlider} />
      </div>
    </div>
  );
}

export default PlaybackBar;
