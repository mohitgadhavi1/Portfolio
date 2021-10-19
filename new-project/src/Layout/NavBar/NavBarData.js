import React from "react";
import * as Ai from 'react-icons/ai'
import {RiProjectorLine} from 'react-icons/ri';
//import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

 const NavBarData = [
    // {
    //     title: 'Home',
    //     path: '/',
    //     icon:<Ai.AiOutlineHome/>,
    //  cName: 'nav-text'
    // },
    {
        title: 'About Me',
        path: '/about-me',
      //  icon:<PermIdentityOutlinedIcon/>,
        cName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/sevices',
       // icon:<Ai.AiOutlineHome/>,
     cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
     //   icon:<RiProjectorLine value={{color:"var(--secondary_dark)"}}/>,
        cName: 'nav-text'
   },
   {
    title: 'Contact',
    path: '/contact',
   // icon:<RiProjectorLine value={{color:"var(--secondary_dark)"}}/>,
    cName: 'nav-text'
},
{
    title: 'Blog',
    path: '/blog',
   // icon:<PermIdentityOutlinedIcon/>,
    cName: 'nav-text'
},

    {
        title: 'Login / Register',
        path: '/auth',
      //  icon:<Ai.AiOutlineLogin/>,
        cName: 'nav-text'
                        
    },

]

export default NavBarData;