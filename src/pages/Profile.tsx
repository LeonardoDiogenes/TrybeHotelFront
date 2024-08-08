import Bookings from '../components/Bookings';
import Layout from '../components/Layout';
import UserBox from '../components/UserBox';
import styles from '../css/Profile.module.css';


function Profile() {

  return (
    <Layout>
      <div className={styles.wrapper}>
        <UserBox />
        <div className={styles.bookings}>
          <Bookings />
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
