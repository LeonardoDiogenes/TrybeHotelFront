import styles from '../css/Grid.module.css';
import Card from './Card';
import { Hotel } from '../types/hotelType';

const Grid: React.FC<{ hotels: Hotel[] }> = ({ hotels }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Hotéis</h1>
      <ul className={styles.list}>
        {hotels.map((hotel) => (
          <Card key={hotel.id} hotel={hotel} />
        ))}
      </ul>
    </div>
  )
}

export default Grid;
