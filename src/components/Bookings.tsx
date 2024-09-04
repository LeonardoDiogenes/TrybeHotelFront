import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { deleteBooking, getBookingsByUser } from "../async/asyncFuncs";
import styles from "../css/Bookings.module.css";
import { BookingResponse } from "../types/bookingType";

type BookingType = "scheduled" | "concluded";

function Bookings() {
  const { user } = useContext(UserContext);
  const [bookings, setBookings] = useState<BookingResponse[]>([]);
  const [bookingsType, setBookingsType] = useState<BookingType>("scheduled");

  useEffect(() => {
    const fetchAndFilterBookings = async () => {
      try {
        const allBookings = await getBookingsByUser(user!.token);
        const filteredBookings = filterBookings(allBookings, bookingsType);
        setBookings(filteredBookings);
      } catch (error) {
        console.error(error);
        alert("Falha ao buscar reservas");
      }
    };

    fetchAndFilterBookings();
  }, [user, bookingsType]);

  const formatDateTime = (dateTime: string) => {
    const [date, time] = dateTime.split("T");
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    const formattedTime = `${formattedHour}:${minutes} ${period}`;
    return { date, time: formattedTime };
  };

  const handleCancelBtn = async (bookingId: number) => {
    try {
      await deleteBooking(bookingId, user!.token);
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.bookingId !== bookingId))
    } catch (error) {
      console.error(error);
      alert("Falha ao cancelar reserva");
    }
  };

  const filterBookings = (bookings: BookingResponse[], filterType: BookingType) => {
    const today = new Date();

    return bookings.filter((booking) => {
      const checkOutDate = new Date(booking.checkout);

      if (filterType === "concluded") {
        return checkOutDate < today;

      } else if (filterType === "scheduled") {

        return checkOutDate >= today;
      }

      return false;
    });
  };

  return (
    <div className={styles.bookingsContainer}>
      <h1 style={{ fontSize: '1.5em' }}>Reservas</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${bookingsType === "scheduled" ? styles.active : ""}`}
          onClick={() => setBookingsType("scheduled")}
        >
          Agendados
        </button>
        <button
          className={`${styles.tabButton} ${bookingsType === "concluded" ? styles.active : ""}`}
          onClick={() => setBookingsType("concluded")}
        >
          Concluídos
        </button>
      </div>

      <div className={styles.bookingsList}>
        {bookings.map((booking, index) => {
          const { date: checkinDate, time: checkinTime } = formatDateTime(booking.checkin);
          const { date: checkoutDate, time: checkoutTime } = formatDateTime(booking.checkout);

          return (
            <div key={index} className={styles.bookingCard}>
              <div className={styles.bookingInfo}>
                <div className={styles.hotelRoom}>
                  <h3>{booking.room.hotel.name}</h3>
                  <h4>{booking.room.name}</h4>
                </div>
                <div className={styles.checkInAndOut}>
                  <p>Check In: {checkinDate} / {checkinTime}</p>
                  {bookingsType === "concluded" && (
                    <p>Check Out: {checkoutDate} / {checkoutTime}</p>
                  )}
                </div>
                <p>Hóspedes: {booking.guestQuant}</p>
              </div>
              {bookingsType === "scheduled" && (
                <button
                  className={styles.cancelButton}
                  onClick={() => handleCancelBtn(booking.bookingId)}
                >Cancelar</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bookings;
