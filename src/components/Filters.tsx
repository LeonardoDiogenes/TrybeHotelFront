import { useContext } from 'react';
import styles from '../css/Filters.module.css';
import Button from '@mui/material/Button';
import UserContext from '../context/UserContext';
import LoadingCard from './LoadingCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import FiltersForm from './FiltersForm';

function Filters() {
  const { isFetching } = useContext(UserContext);

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
            <FiltersForm />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );

}

export default Filters;

