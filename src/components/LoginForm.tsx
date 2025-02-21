import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import styles from '../css/LoginForm.module.css';
import UserContext from '../context/UserContext';
import { login } from '../async/asyncFuncs'
import Button from '@mui/material/Button';

function LoginForm() {
  const { setUser, setShowLogin, user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login(formData.email, formData.password);
      setUser({ email: formData.email, password: formData.password, name: data.user.name, token: data.token });
      alert('Logged in successfully');
      setShowLogin(false);
    } catch (error) {
      alert('Failed to log in');
      console.log(error);
      setShowLogin(false);
    }
  }
  
  return (
    <div className={styles.wrapper}>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}
        type="text"
        placeholder='Email'
        name="email"
        value={formData.email} />
        <input onChange={handleChange}
        type="password"
        placeholder='Password'
        name="password"
        value={formData.password} />
        <Button 
          type="submit"
          variant="contained">
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;