import { useContext } from 'react';
import UserContext from '../context/UserContext';
import styles from '../css/Header.module.css';

function Header() {
  const { setShowLogin } = useContext(UserContext);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleHomeClick = () => {
    setShowLogin(false);
  }
  
  return (
    <header className={styles.header}>
      <div className = {styles.title}>
        <img src="../../imgs/trybe_logo.png" alt="Logo Trybe" />
        <h1>TrybeHotel</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#" onClick={handleHomeClick}>Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <button onClick={handleLoginClick}>Login</button>
        <button>Registrar</button>
      </div>
    </header>
  )
}

export default Header;