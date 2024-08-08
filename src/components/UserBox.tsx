import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import UserContext from '../context/UserContext';
import styles from '../css/UserBox.module.css';
import { useContext } from 'react';

function UserBox() {
  const { user } = useContext(UserContext);
  const firstLetter = user?.name[0].toUpperCase();
  
  return (
    <div className={styles.wrapper}>
        <Box className={styles.profileBox}>
          <Avatar
            sx={{
              width: 130,
              height: 130,
              bgcolor: 'rgba(76, 175, 80, 0.8)',
              fontSize: '3rem',
            }}>
            {firstLetter}
          </Avatar>
          <h1>{user?.name}</h1>
          <div className={styles.userRating}>
            <p>Avaliação</p>
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
        </Box>
      </div>
  )
}

export default UserBox;