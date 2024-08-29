import { ChangeEvent, useContext, useState } from 'react';
import styles from '../css/FiltersForm.module.css';
import UserContext from '../context/UserContext';
import { getAllHotels, getAllRooms, getHotelsByGeoLocation, getRoomsByLocation } from '../async/asyncFuncs'
import HotelContext from '../context/HotelContext';
import Button from '@mui/material/Button';

function FiltersForm() {

  const { setIsFetching } = useContext(UserContext);
  const { setHotels, filterType, setRooms } = useContext(HotelContext);

  const [formData, setFormData] = useState({
    location: '',
    checkin: '',
    checkout: '',
    guests: ''
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log('Dados do form:' + formData);
      setIsFetching(true);
      if (filterType === 'hotel') {
        if (formData.location) {
          const hotels = await getHotelsByGeoLocation(formData.location);
          setHotels(hotels);
        } else {
          const hotels = await getAllHotels();
          setHotels(hotels);
        }
      }
      if (filterType === 'room') {
        if (formData.location) {
          const rooms = await getRoomsByLocation(formData.location);
          setRooms(rooms);
        } else {
          const rooms = await getAllRooms();
          setRooms(rooms);
        }
      }
      setIsFetching(false);
    } catch (error) {
      console.error('Error fetching hotels', error);
    }
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <div className={styles.background}>
        <div className={styles.filter}>
          <label htmlFor="location">Localização:</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleChange}
            placeholder="Digite a localização"
          />
        </div>
        <div className={styles.filter}>
          <label htmlFor="checkin">Check-in:</label>
          <input
            type="date"
            name="checkin"
            id="checkin"
            onChange={handleChange}
            placeholder="Digite a data do check-in"
          />
        </div>
        <div className={styles.filter}>
          <label htmlFor="checkout">Check-out:</label>
          <input
            type="date"
            name="checkout"
            id="checkout"
            onChange={handleChange}
            placeholder="Digite a data do check-out"
          />
        </div>
        <div className={styles.filter}>
          <label htmlFor="guests">Quantidade de hóspedes:</label>
          <input
            type="number"
            name="guests"
            id="guests"
            onChange={handleChange}
            placeholder="Digite a quantidade de hóspedes"
          />
        </div>
      </div>
      <Button
        type='submit'
        variant='contained'
        sx={{
          marginTop: '2em',
          backgroundColor: '#4CAF50',
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          color: 'black',
          '&:hover': { backgroundColor: '#45a049', borderColor: '#0062cc' }
        }}
      >
        Pesquisar
      </Button>
    </form>
  )
}

export default FiltersForm;