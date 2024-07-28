import { useContext } from 'react';
import Header from "../components/Header";
import Filters from "../components/Filters";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import styles from '../css/Home.module.css';
import UserContext from '../context/UserContext';


function Home() {
  const { showLogin } = useContext(UserContext);
  
  return (
    <div className={styles.wrapper}>
      <Header />
      {showLogin ? (
        <LoginForm />
      ) : (
        <>
          <Filters />
          <Grid />
        </>
      )}
      <Footer />
    </div>
  )
}

export default Home;