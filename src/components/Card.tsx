import styles from '../css/Card.module.css';
import { Hotel, HotelsByGeoResponse } from '../types/hotelType';

const Card: React.FC<{ hotel: Hotel | HotelsByGeoResponse }> = ({ hotel }) => {
  return (
    <li className={styles.wrapper}>
      <img src={hotel.image} alt="Imagem do hotel" />
      <h2>{hotel.name}</h2>
      <p>{hotel.address}</p>
    </li>
  )
}

export default Card;