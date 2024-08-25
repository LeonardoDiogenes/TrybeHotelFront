import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { HotelResponse } from "../types/hotelType";
import { RoomResponse } from "../types/roomType";
import styles from "../css/HotelRoom.module.css";
import ImageGrid from "../components/ImageGrid";
import RoomList from "../components/RoomList";
import Button from '@mui/material/Button';


function HotelRoom() {
  const location = useLocation();
  const { data } = location.state as { data: HotelResponse | RoomResponse };

  return (
    <Layout>
      <div className={styles.pagewrapper}>
        <h1 className={styles.title}>{data.name}</h1>
        {'address' in data ? (
          <>
            <h3>{`${data.cityName}, ${data.state}`}</h3>
            <h4>{`${data.address}`}</h4>
          </>
        ) : (
          <>
            <h3>{data.hotel.name}</h3>
            <h4>{`${data.hotel.cityName}, ${data.hotel.state}`}</h4>
          </>
        )}

        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <ImageGrid key="grid" data={data} />
          </div>
        </div>
        {'address' in data ? (
          <RoomList />
        ) : (
          <Button
            type='submit'
            variant='contained'
            sx={{
              marginTop: '2em',
              backgroundColor: 'transparent',
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              color: 'black',
              '&:hover': { backgroundColor: '#45a049', borderColor: '#0062cc' }
            }}
          >
            Agendar
          </Button>
        )

        }
      </div>
    </Layout>
  )
}

export default HotelRoom;
