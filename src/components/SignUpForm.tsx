import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import styles from '../css/SignUpForm.module.css';
import { signUp } from '../async/asyncFuncs';
import UserContext from '../context/UserContext';
import Button from '@mui/material/Button';

function SignUpForm() {
  const { setShowSignUp } = useContext(UserContext);
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
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      await signUp(formData.name, formData.email, formData.password);
      setShowSignUp(false);
      alert('User created successfully');
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className={styles.wrapper}>
      <h2>SIGN UP</h2>
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
        <Button 
          type="submit"
          variant="contained">
          Sign up
        </Button>
      </form>
    </div>
  )
}

export default SignUpForm;