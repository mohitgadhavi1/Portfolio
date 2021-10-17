import React,{useState, useEffect}  from 'react';
import Login from './Login/Login';
import Card from '../../UI/Card';
import Header from '../../Layout/Header/Header';
import './Auth.scss';
import Hero from '../../Layout/Sections/Hero/Hero';
import { mergeClasses } from '@material-ui/styles';



function Auth(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedLoginInfo=localStorage.getItem('isLoggedIn');
    if (storedLoginInfo === '1'){
      setIsLoggedIn(true);
    }
  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  
    return (
      <div className='auth-page'>
        
        <h1>This Section is in Devlopment phase.Come back soon</h1>
      {/* <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
     
   <div className='auth-container' > 
  
   {!isLoggedIn &&  
     <Login onLogin={loginHandler}/>
    }
     {isLoggedIn && <Hero onLogout={logoutHandler} />}
  </div>
  </div>
    )
}

export default Auth;
