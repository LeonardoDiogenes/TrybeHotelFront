import Layout from '../components/Layout';
import styles from '../css/Profile.module.css';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import UserContext from '../context/UserContext';
import { useContext } from 'react';


function Profile() {
  const { user } = useContext(UserContext);
  const firstLetter = user?.name[0].toUpperCase();

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Box className={styles.profileBox}>
          <Avatar
            sx={{
              width: 130,
              height: 130,
              // top: -130,
              bgcolor: 'rgba(76, 175, 80, 0.8)'
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
    </Layout>
  );
}

export default Profile;
