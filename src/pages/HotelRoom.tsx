import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { Hotel } from "../types/hotelType";
import { RoomResponse } from "../types/roomType";
import styles from "../css/HotelRoom.module.css";


function HotelRoom() {
  const location = useLocation();
  const { data } = location.state as { data: Hotel | RoomResponse };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>{data.name}</h1>
        <div>
          <img src={data.image} alt="" />
        </div>
      </div>
    </Layout>
  )
}

export default HotelRoom;