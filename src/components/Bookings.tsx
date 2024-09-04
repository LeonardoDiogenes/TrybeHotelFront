import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { getBookingsByUser } from "../async/asyncFuncs";
import styles from "../css/Bookings.module.css";
import { BookingResponse } from "../types/bookingType";

function Bookings() {
  const { user } = useContext(UserContext);
  const [bookings, setBookings] = useState<BookingResponse[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await getBookingsByUser(user!.token);
      setBookings(response);
    };

    fetchBookings();
  }, [user]);

  const formatDateTime = (dateTime: string) => {
    const [date, time] = dateTime.split("T");
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    const formattedTime = `${formattedHour}:${minutes} ${period}`;
    return { date, time: formattedTime };
  };

  return (
    <div className={styles.bookingsContainer}>
      <h1>Reservas</h1>
      <div className={styles.tabs}>
        <button className={styles.tabButton}>Agendados</button>
        <button className={styles.tabButton}>Concluídos</button>
      </div>
      <div className={styles.bookingsList}>
        {bookings.map((booking, index) => {
          const { date, time } = formatDateTime(booking.checkin);
          
          return (
            <div key={index} className={styles.bookingCard}>
              <div className={styles.bookingInfo}>
                <h3>{booking.room.hotel.name}</h3>
                <p>Check In: {date} - {time}</p>
                <p>Guests: {booking.guestQuant}</p>
              </div>
              <button className={styles.cancelButton}>Cancel Reservation</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bookings;
