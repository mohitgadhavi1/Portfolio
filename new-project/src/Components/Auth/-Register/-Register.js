import React from "react";
import {GoogleSquareFilled, FacebookFilled} from '@ant-design/icons';
import './Chat-UI/Login.scss'


 const Login = () => {
    return (
        <div className='social_logins'>
             <button className='social_login-button'>
           < GoogleSquareFilled className='google'/>
           </button>
           <button className='social_login-button'>
           < FacebookFilled className='facebook'/>
           </button>
        </div>
    )
}

export default Login;