import { useContext } from 'react';
import UserContext from '../context/UserContext';
import styles from '../css/Header.module.css';
import Button from '@mui/material/Button';
import UserMenu from './UserMenu';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const { setShowLogin, setShowSignUp, user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    navigate('/');
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    navigate('/');
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleHomeClick = () => {
    setShowLogin(false);
    setShowSignUp(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
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
        <UserMenu />
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
