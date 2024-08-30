import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { RoomResponse } from '../types/roomType';
import styles from '../css/RoomInfo.module.css';

function RoomInfo({ data }: { data: RoomResponse }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <PeopleAltIcon
          sx={{ fontSize: 100 }}
        />
        <h3>Capacidade de hóspedes:</h3>
        <p>{data.capacity}</p>
      </div>
    </div>
  );
}

export default RoomInfo;