import { ReactNode, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../css/Layout.module.css';
import HotelContext from '../context/HotelContext';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { hotels, rooms, filterType, } = useContext(HotelContext);

  const hotelsCount = hotels.length;
  const roomsCount = rooms.length;
  
  return (
    <div className={styles.wrapper}>
      <Header />
      <p>{hotelsCount}</p>
      <p>{roomsCount}</p>
      <p>{filterType}</p>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
