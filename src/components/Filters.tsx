import { ChangeEvent, useContext, useState } from 'react';
import styles from '../css/Filters.module.css';
import Button from '@mui/material/Button';
import { getHotelsByGeoLocation } from '../async/asyncFuncs'
import UserContext from '../context/UserContext';
import LoadingCard from './LoadingCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Filters() {
  const { setHotels, isFetching, setIsFetching } = useContext(UserContext);
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
      const hotels = await getHotelsByGeoLocation(formData.location);
      console.log(hotels);
      setHotels(hotels);
      setIsFetching(false);
    } catch (error) {
      console.error('Error fetching hotels', error);
    }
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.filtersLabel}>
        <h1>Encontrar</h1>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4CAF50',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: 'black',
            '&:hover': { backgroundColor: '#45a049', borderColor: '#0062cc' }
          }}
        >
          Hotéis
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4CAF50',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: 'black',
            '&:hover': { backgroundColor: '#45a049', borderColor: '#0062cc' }
          }}
        >
          Quartos
        </Button>
      </div>
      <TransitionGroup>
        {isFetching ? (
          <CSSTransition
            key="loading"
            timeout={500}
            classNames={{
              enter: styles['fade-enter'],
              enterActive: styles['fade-enter-active'],
              exit: styles['fade-exit'],
              exitActive: styles['fade-exit-active']
            }}
          >
            <LoadingCard />
          </CSSTransition>
        ) : (
          <CSSTransition
            key="filters"
            timeout={500}
            classNames={{
              enter: styles['fade-enter'],
              enterActive: styles['fade-enter-active'],
              exit: styles['fade-exit'],
              exitActive: styles['fade-exit-active']
            }}
          >
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
                    type="text"
                    name="checkin"
                    id="checkin"
                    onChange={handleChange}
                    placeholder="Digite a data do check-in"
                  />
                </div>
                <div className={styles.filter}>
                  <label htmlFor="checkout">Check-out:</label>
                  <input
                    type="text"
                    name="checkout"
                    id="checkout"
                    onChange={handleChange}
                    placeholder="Digite a data do check-out"
                  />
                </div>
                <div className={styles.filter}>
                  <label htmlFor="guests">Quantidade de hóspedes:</label>
                  <input
                    type="text"
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
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );

}

export default Filters;
