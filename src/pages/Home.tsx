import { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Filters from "../components/Filters";
import Grid from "../components/Grid";
import LoginForm from "../components/LoginForm";
import styles from '../css/Home.module.css';
import UserContext from '../context/UserContext';
import SignUpForm from '../components/SignUpForm';
import Layout from '../components/Layout';
import HotelContext from '../context/HotelContext';

function Home() {
  const { showLogin, showSignUp } = useContext(UserContext);
  const { hotels, setHotels } = useContext(HotelContext);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('https://localhost:5001/hotel');
        if (response.ok) {
          const data = await response.json();
          setHotels(data);
        }
      } catch (error) {
        console.error('Error fetching hotels', error);
      }
    }

    fetchHotels();
  }, []);

  return (
    <Layout>
      <div>
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
      </div>
    </Layout>
  );
}

export default Home;
