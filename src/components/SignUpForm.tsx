import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import styles from '../css/SignUpForm.module.css';

function SignUpForm() {
  const { setNewUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setNewUser({
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        bookings: []
      });

    } else {
      alert('Passwords do not match');
    }
  };
  
  return (
    <div className={styles.wrapper}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder="Name"
         name="name"
         value={formData.name}
         onChange={handleChange} />
        <input type="email"
         name="email"
         placeholder="Email"
         value={formData.email}
         onChange={handleChange} />
        <input type="password"
         name="password"
         placeholder="Password"
         value={formData.password}
         onChange={handleChange} />
        <input type="password"
         name="confirmPassword"
         placeholder="Confirm Password"
         value={formData.confirmPassword}
         onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;