import { useContext } from 'react';
import UserContext from '../context/UserContext';
import styles from '../css/Header.module.css';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  const { setShowLogin, setShowSignUp, user } = useContext(UserContext);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleHomeClick = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <img onClick={handleHomeClick} src="../../imgs/trybe_logo.png" alt="Logo Trybe" />
        <h1 onClick={handleHomeClick}>TrybeHotels</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#" onClick={handleHomeClick}>Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      {user !== null ? (
        <div className={styles.menu}>
          <Button
          component="label"
          variant="contained"
          startIcon={<PersonIcon
          sx={{
            width: '1.7em',
            height: '2em',
            color: 'black',
            marginLeft: '0.5em',
          }}/>}
          sx={{
            width: '7em',
            height: '3em',
            justifyContent: 'center',
            borderRadius: '10px',
            backgroundColor: '#4CAF50',
            fontFamily: 'Montserrat',
            color: 'black',
            '&:hover': { backgroundColor: '#45a049', borderColor: '#0062cc' }
          }}>

          </Button>
        </div>
      ) : (
        <div className={styles.buttons}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4CAF50',
              fontFamily: 'Montserrat',
              color: 'black',
              '&:hover': { backgroundColor: '#45a049', borderColor: '#0062cc' }
            }}
            onClick={handleLoginClick}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4CAF50',
              fontFamily: 'Montserrat',
              color: 'black',
              '&:hover': { backgroundColor: '#45a049', borderColor: '#0062cc' }
            }}
            onClick={handleSignUpClick}
          >
            Sign up
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;
