import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../css/Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
