import { Booking } from "./bookingType";
import { HotelResponse } from "./hotelType";

export interface Room {
  id: number;
  name: string;
  capacity: number;
  image: string;
  hotelId: number;
  bookings: Booking[];
}

export interface RoomResponse {
  roomId: number;
  name: string;
  capacity: number;
  image: string;
  hotel: HotelResponse;
}

export interface RoomProps {
  data: RoomResponse;
}




// import styles from '../css/Grid.module.css';
// import HotelCard from './HotelCard';
// import { HotelProps } from '../types/hotelType';
// import { RoomProps } from '../types/roomType';

// type GridProps = HotelProps[] | RoomProps[];

// const Grid: React.FC<GridProps> = ({ data = [] }) => {
//   return (
//     <div className={styles.wrapper}>
//       <h1>Hotéis</h1>
//       <ul className={styles.list}>
//         {data.map((data, index) => (
//           <HotelCard key={data.id || index} data={data} />
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Grid;