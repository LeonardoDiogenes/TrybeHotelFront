import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BedIcon from '@mui/icons-material/Bed';
import SingleBedIcon from '@mui/icons-material/SingleBed';
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
      <div className={styles.card}>
        <BedIcon
          sx={{ fontSize: 100 }}
        />
        <h3>Camas de casal:</h3>
        <p>{data.kingSizeBeds}</p>
      </div>
      <div className={styles.card}>
        <SingleBedIcon
          sx={{ fontSize: 100 }}
        />
        <h3>Camas de solteiro:</h3>
        <p>{data.singleSizeBeds}</p>
      </div>
    </div>
  );
}

export default RoomInfo;