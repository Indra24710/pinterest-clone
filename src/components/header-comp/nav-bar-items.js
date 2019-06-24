import React from 'react';
import '../../styles/header.css'
import notifs from './notification-outline.png';
import options from './126-More-512.png';
import messages from './chat-messages.svg';

const Navitems=()=>{
    return(
    
        <ul className="nav">
            <li>Home</li>
            <li>Following</li>
            <li>Indra</li>
            <li><img src={messages} style={{height:'19px'}} /></li>
            <li><img src={notifs} /></li>
            <li><img src={options} /></li>
       
        </ul>
    
    )
}
export default Navitems;