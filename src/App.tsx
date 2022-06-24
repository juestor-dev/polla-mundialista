import { useEffect, useState } from 'react'
import './App.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import { LoginContext } from './contexts/LoginContext';
import { UserProfile } from './components/login/login';

const App = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate();
  
  useEffect(() => {
    console.log('useEffect - showProfile', showProfile);
    if(showProfile) {    
      navigate('/profile');
    } else {
      navigate('/home');
    }
  }, [showProfile]);

  const logOut = () => {
    console.log('ACA LOGOUT CLICK');
    setUserProfile(undefined);
    setShowProfile(false);
    navigate('/home');
  }

  return (
    <div className="App">
      <LoginContext.Provider value={{ userProfile, setUserProfile, showProfile, setShowProfile }}>
        <header className="App-header">
          <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
            {!showProfile ? <Link to="/login">Login</Link> : <a onClick={logOut}>Logout!</a>} 
          </nav>
        </header>
        
        <Outlet />
      </LoginContext.Provider>
    </div>
  )
}

export default App
