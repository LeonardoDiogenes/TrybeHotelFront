import styles from '../css/Card.module.css';
import { HotelProps } from '../types/hotelType';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button'
import { RoomProps } from '../types/roomType';

type Props = HotelProps | RoomProps;


const HotelCard: React.FC<Props> = ({ data }) => {
  return (
    <Card className={styles.wrapper}
    sx = {{
      backgroundColor: 'rgba(76, 175, 80, 0.8)',
    }}>
      <img src={data.image} alt="Imagem do hotel" />
      <h2>{data.name}</h2>
      <p>{'address' in data ? data.address : data.hotel.address}</p>
      <CardActions>
      <Button size="small">Visitar</Button>
      </CardActions>
    </Card>
  )
}

export default HotelCard;


