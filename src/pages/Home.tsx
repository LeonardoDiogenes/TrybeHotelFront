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


function Home() {
  const { showLogin, showSignUp } = useContext(UserContext);
  
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
              <Grid />
            </>
          </CSSTransition>
        )}
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default Home;