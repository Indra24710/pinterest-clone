import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import '../styles/header.css'
import Logo from './pinterest-logo.png'
import message from './header-comp/messages.svg'
import notifs from './header-comp/notification.png'
import dots from './header-comp/dots.png'
import search from './header-comp/search.jpg'
const Header=()=>{
    return(
<div>
<Jumbotron fluid className="Jumbo">
    <img src={Logo} style={{height:'38px' ,width:'50px',padding:'5px 15px 5px 8px'}}/>
    <InputGroup style={{width:'800px'}}>
    
    <FormControl placeholder='Search...'  style={{borderRadius:'7px',backgroundColor:'#d8d6ca'}} />
    </InputGroup>
    <ul className='nav'>
        <li style={{paddingTop:'5px'}}>Home</li>
        <li style={{paddingTop:'5px'}}>Following</li>
        <li style={{paddingTop:'5px'}}>Indra</li>
        <li><img src={message} style={{height:'25px',paddingTop:'8px'}}/></li>
        <li><img src={notifs} style={{height:'25px',paddingTop:'8px'}}/></li>
        <li><img src={dots} style={{height:'25px',paddingTop:'8px'}}/></li>

    </ul>



</Jumbotron>



    </div>




    )
}

export default Header;