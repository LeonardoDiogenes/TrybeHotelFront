import styles from '../css/Grid.module.css';
import Card from './Card';

function Grid() {
  return (
    <div className={styles.wrapper}>
      <h1>Hotéis/Quartos em location</h1>
      <ul className={styles.list}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  )
}

export default Grid;