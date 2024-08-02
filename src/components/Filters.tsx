import styles from '../css/Filters.module.css';
import Button from '@mui/material/Button';

function Filters() {
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
          '&:hover': {backgroundColor: '#45a049', borderColor: '#0062cc'}
        }}>
          Hotéis
        </Button>
        <Button
        variant="contained"
        sx={{
          backgroundColor: '#4CAF50',
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          color: 'black',
          '&:hover': {backgroundColor: '#45a049', borderColor: '#0062cc'}
        }}>
          Quartos
        </Button>
      </div>
      <form className={styles.filters}>
        <div className={styles.background}>
          <div className={styles.filter}>
            <label htmlFor="location">Localização:</label>
            <input type="text" name="location" id="location" placeholder="Digite a localização"/>
          </div>
          <div className={styles.filter}>
            <label htmlFor="checkin">Check-in:</label>
            <input type="text" name="checkin" id="checkin" placeholder="Digite a data do check-in"/>
          </div>
          <div className={styles.filter}>
            <label htmlFor="checkout">Check-out:</label>
            <input type="text" name="checkout" id="checkout" placeholder="Digite a data do check-out"/>
          </div>
          <div className={styles.filter}>
            <label htmlFor="guests">Quantidade de hóspedes:</label>
            <input type="text" name="guests" id="guests" placeholder="Digite a quantidade de hóspedes"/>
          </div>
        </div>        
      </form>
    </div>
  );
}

export default Filters;
