import styles from '../css/Filters.module.css';

function Filters() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filtersLabel}>
        <h1>Encontrar</h1>
        <button>Hotéis</button>
        <button>Quartos</button>
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
