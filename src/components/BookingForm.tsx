import { ChangeEvent, useContext } from "react";
import styles from '../css/BookingForm.module.css';
import HotelContext from "../context/HotelContext";


function BookingForm() {
  const { bookingData, setBookingData } = useContext(HotelContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value
    })
  };
  
  return (
    <div>
    <form className={styles.filters}>
      <div className={styles.background}>
        <div className={styles.filter}>
          <label htmlFor="checkin">Check-in:</label>
          <input
            type="date"
            name="checkIn"
            id="checkIn"
            onChange={handleChange}
            placeholder="Digite a data do check-in"
          />
        </div>
        <div className={styles.filter}>
          <label htmlFor="checkout">Check-out:</label>
          <input
            type="date"
            name="checkOut"
            id="checkOut"
            onChange={handleChange}
            placeholder="Digite a data do check-out"
          />
        </div>
        <div className={styles.filter}>
          <label htmlFor="guestQuantity">Quantidade de hóspedes:</label>
          <input
            type="number"
            name="guestQuantity"
            id="guestQuantity"
            onChange={handleChange}
            placeholder="Digite a quantidade de hóspedes"
          />
        </div>
      </div>
    </form>
    </div>
  )
}

export default BookingForm;
