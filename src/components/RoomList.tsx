import { useEffect, useState } from 'react';
import styles from '../css/RoomList.module.css';
import Grid from './Grid';
import { RoomResponse } from '../types/roomType';

function RoomList({ hotelId }: { hotelId: number }) {
  const [rooms, setRooms] = useState<RoomResponse[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(`https://localhost:5001/room/${hotelId}`);
        if (response.ok) {
          const data = await response.json();
          setRooms(data);
        }
      } catch (error) {
        console.error('Error fetching rooms', error);
      }
    }

    fetchRooms();
  }, [hotelId]);
  
  return (
    <div className={styles.wrapper}>
      <Grid key="grid" data={rooms}/>
    </div>
  )
}

export default RoomList;