import styles from '../css/Card.module.css';

function Card() {
  return (
    <li className={styles.wrapper}>
      <img src="" alt="" />
      <h2>Nome do hotel</h2>
      <p>Endereço do hotel</p>
    </li>
  )
}

export default Card;