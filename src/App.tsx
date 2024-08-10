import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import styles from './css/App.module.css';
import UserContext from './context/UserContext';
import { UserContextType } from './types/userType';
import Profile from './pages/Profile';
import { FilterType, HotelContextType } from './types/hotelType';
import HotelContext from './context/HotelContext';

function App() {
  const [user, setUser] = useState<UserContextType["user"]>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [hotels, setHotels] = useState<HotelContextType["hotels"]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filterType, setFilterType] = useState<FilterType>('hotel');

  return (
    <UserContext.Provider value={{
      user, setUser,
      showLogin, setShowLogin,
      showSignUp, setShowSignUp,
      isFetching, setIsFetching
    }}>
      <HotelContext.Provider value={{
        hotels, setHotels, filterType, setFilterType
      }}>
        <div className={styles.rootcss}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </HotelContext.Provider>
    </UserContext.Provider>
  )
}

export default App
