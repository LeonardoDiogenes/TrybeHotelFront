import styles from '../css/Card.module.css';
import { Hotel, HotelsByGeoResponse } from '../types/hotelType';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button'


const HotelCard: React.FC<{ hotel: Hotel | HotelsByGeoResponse }> = ({ hotel }) => {
  return (
    <Card className={styles.wrapper}
    sx = {{
      backgroundColor: 'rgba(76, 175, 80, 0.8)',
    }}>
      <img src={hotel.image} alt="Imagem do hotel" />
      <h2>{hotel.name}</h2>
      <p>{hotel.address}</p>
      <CardActions>
      <Button size="small">Visitar</Button>
      </CardActions>
    </Card>
  )
}

export default HotelCard;


// return (
//   <li className={styles.wrapper}>
//     <img src={hotel.image} alt="Imagem do hotel" />
//     <h2>{hotel.name}</h2>
//     <p>{hotel.address}</p>
//   </li>
// )

// return (
//   <Card>
//     <CardContent className={styles.wrapper}>
//     <img src={hotel.image} alt="Imagem do hotel" />
//     <h2>{hotel.name}</h2>
//     <p>{hotel.address}</p>
//     </CardContent>
//   </Card>
// )

