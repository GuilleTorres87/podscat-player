
import styles from '../estilos/header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="src/img/music.png" alt="tube" />
      </div>
      <input type="text" placeholder="Search" className={styles.searchBar} />
      <div className={styles.profilePic}>
        <img src="src/img/perfil.jpg" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;

