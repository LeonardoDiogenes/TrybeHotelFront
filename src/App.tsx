import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import styles from './css/App.module.css';
import UserContext from './context/UserContext';
import { UserContextType } from './types/userType';

function App() {
  const [user, setUser] = useState<UserContextType["user"]>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <UserContext.Provider value={{user, setUser, showLogin, setShowLogin, showSignUp, setShowSignUp }}>
      <div className={styles.rootcss}>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      
      </div>
    </UserContext.Provider>
  )
}

export default App
