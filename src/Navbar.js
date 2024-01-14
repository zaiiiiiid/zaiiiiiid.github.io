import React from 'react';
import Rjs from './images/reactimg.png';

export default function Navbar(){
    return(
        <nav className='navbar'>
            <h1 className='navlogo'>MJDIAZ</h1>
            <img className='react-logo' src={Rjs}/>
        </nav>
    )
}