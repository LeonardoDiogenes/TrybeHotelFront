import styles from '../css/LoadingCard.module.css';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingCard() {
  return (
    <div className={styles.wrapper}>
      <CircularProgress />
      <p>Loading...</p>
    </div>
  )
}

export default LoadingCard;