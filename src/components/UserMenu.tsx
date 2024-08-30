import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../css/UserMenu.module.css';
import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function UserMenu() {
  const { user, setUser } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  const handleLogOut = () => {
    alert('Tem certeza que deseja sair?');
    setUser(null);
    setShowMenu(false);
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setShowMenu(false);
  };

  return (
    <div className={styles.wrapper}>
      <h3>Bem vindo, {user?.name}</h3>
      <div className={styles.menuPosition}>
        <Button
          component="label"
          variant="contained"
          onClick={handleClick}
          startIcon={<MenuIcon
            sx={{
              width: '1.7em',
              height: '2em',
              color: 'black',
              marginLeft: '0.5em',
            }} />}
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
        {showMenu && (
          <div className={`${styles.menu} ${showMenu ? styles.menuOpen : ''}`}>
            <ul>
              <li>
                <a href="#" onClick={handleProfileClick}>Perfil</a>
              </li>
              <li>
                <a href="#">Configurações</a>
              </li>
              <li>
                <a href="#" onClick={handleLogOut}>Log out</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div >
  )
}

export default UserMenu;