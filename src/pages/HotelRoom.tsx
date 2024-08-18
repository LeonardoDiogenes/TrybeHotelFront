import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { Hotel } from "../types/hotelType";
import { RoomResponse } from "../types/roomType";
import styles from "../css/HotelRoom.module.css";
import ImageGrid from "../components/ImageGrid";


function HotelRoom() {
  const location = useLocation();
  const { data } = location.state as { data: Hotel | RoomResponse };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>{data.name}</h1>
        <div className={styles.grid}>
          <ImageGrid key="grid" data={data} />
        </div>
      </div>
    </Layout>
  )
}

export default HotelRoom;