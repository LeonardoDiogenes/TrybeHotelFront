import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { HotelResponse } from "../types/hotelType";
import { RoomResponse } from "../types/roomType";
import styles from "../css/HotelRoom.module.css";
import ImageGrid from "../components/ImageGrid";
import RoomList from "../components/RoomList";
import Button from '@mui/material/Button';
import { useContext, useState } from "react";
import BookingForm from "../components/BookingForm";
import HotelContext from "../context/HotelContext";
import { addBooking } from "../async/asyncFuncs";
import UserContext from "../context/UserContext";
import { BookingDtoInsert } from "../types/bookingType";
import RoomInfo from "../components/RoomInfo";

function HotelRoom() {
  const location = useLocation();
  const { data } = location.state as { data: HotelResponse | RoomResponse };
  const [isBooking, setIsBooking] = useState<boolean>(false);
  const { bookingData } = useContext(HotelContext);
  const { user } = useContext(UserContext);

  const handleBookingButton = () => {
    if (isBooking) {
      let bookingInsert = {} as BookingDtoInsert;
      if ('roomId' in data) {
        bookingInsert = {
          checkIn: bookingData.checkIn,
          checkOut: bookingData.checkOut,
          guestQuant: bookingData.guestQuant,
          roomId: data.roomId,
        };
      }
      try {
        console.log(bookingInsert);
        addBooking(bookingInsert, user!.token);
        alert('Reserva realizada com sucesso!');
      } catch (error) {
        console.log(error);
      }
    }
    setIsBooking(!isBooking);
  };

  return (
    <Layout>
      <div className={styles.pagewrapper}>
        <h1 className={styles.title}>{data.name}</h1>
        <div className={styles.subTitle}>
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
        </div>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <ImageGrid key="grid" data={data} />
          </div>
        </div>
        {'address' in data ? (
          <div className={styles.roomlist}>
            <RoomList hotelId={data.hotelId} />
          </div>
        ) : (
          <div className={styles.bottomGrid}>
            <div className={styles.roomInfo}>
              <RoomInfo key="roomInfo" data={data} />
            </div>
            <div className={isBooking ? styles.bookingFormWrapper : styles.bookingButton}>
              {isBooking && <BookingForm />}
              {user ? (
                <Button
                  onClick={handleBookingButton}
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
              ) : (
                <h2>Você precisa estar logado para agendar um quarto.</h2>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default HotelRoom;
