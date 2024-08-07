import { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from "../components/Header";
import Filters from "../components/Filters";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import styles from '../css/Home.module.css';
import UserContext from '../context/UserContext';
import SignUpForm from '../components/SignUpForm';
import { useEffect } from 'react';
import { Hotel } from '../types/hotelType';


function Home() {
  const { showLogin, showSignUp, hotels, setHotels } = useContext(UserContext);
  

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('https://localhost:5001/hotel');
        if (response.ok) {
          const data: Hotel[] = await response.json();
          setHotels(data);
        }
      } catch (error) {
        console.error('Error fetching hotels', error);
      }
    }

    fetchHotels();
  }, []);
  
  return (
    <div className={styles.wrapper}>
      <Header />
      <TransitionGroup>
        {showLogin ? (
          <CSSTransition
            key="login"
            timeout={500}
            classNames={{
              enter: styles['fade-enter'],
              enterActive: styles['fade-enter-active'],
              exit: styles['fade-exit'],
              exitActive: styles['fade-exit-active']
            }}
          >
            <LoginForm />
          </CSSTransition>
        ) : showSignUp ? (
          <CSSTransition
            key="signup"
            timeout={500}
            classNames={{
              enter: styles['fade-enter'],
              enterActive: styles['fade-enter-active'],
              exit: styles['fade-exit'],
              exitActive: styles['fade-exit-active']
            }}
          >
            <SignUpForm />
          </CSSTransition>
        ) : (
          <CSSTransition
            key="main"
            timeout={500}
            classNames={{
              enter: styles['fade-enter'],
              enterActive: styles['fade-enter-active'],
              exit: styles['fade-exit'],
              exitActive: styles['fade-exit-active']
            }}
          >
            <>
              <Filters />
              <Grid key="grid" hotels={hotels || []} />
            </>
          </CSSTransition>
        )}
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default Home;