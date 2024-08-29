import styles from '../css/Grid.module.css';
import HotelRoomCard from './HotelRoomCard';
import { HotelResponse, HotelsByGeoResponse } from '../types/hotelType';
import { RoomResponse } from '../types/roomType';

type GridProps = {
  data: (HotelResponse | HotelsByGeoResponse | RoomResponse)[];
};

const Grid: React.FC<GridProps> = ({ data = [] }) => {
  const isRoom = data.length > 0 && "roomId" in data[0];

  return (
    <div className={styles.wrapper}>
      <h1>{isRoom ? 'Quartos' : 'Hotéis'}</h1>
      <ul className={styles.list}>
        {data.map((item) => {
          if ("hotelId" in item) {
            return <HotelRoomCard data={item as unknown as RoomResponse} />;
          } else {
            return <HotelRoomCard data={item as unknown as HotelResponse | HotelsByGeoResponse} />;
          }
        })}
      </ul>
    </div>
  );
}

export default Grid;
