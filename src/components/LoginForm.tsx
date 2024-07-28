import styles from '../css/LoginForm.module.css';

function LoginForm() {
  return (
    <div className={styles.wrapper}>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;