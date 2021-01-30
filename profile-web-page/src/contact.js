import React from 'react';
import face from './images/facebook.png';
import insta from './images/instagram.png';
import ino from './images/linkedin.png';
import mail from './images/email.png';
import tele from './images/tele.png';


export default function contact() {
    
    const handleclick=()=>{
        window.open('mailto:tojan333@gmail.com')
    }
    return (
        <div style={{
            width: '600px',
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            padding: '70px',
            // boxShadow: '3px 20px 20px black' ,
            margin:'auto'       
        }}
        >
            
            <a href='linkedin.com/in/tojan-bukari'><img style={{marginLeft:'5px'}}src={ino} alt="Girl in a jacket" width="20" height="20"/></a>
            <img style={{marginLeft:'5px'}} src={mail} alt="Girl in a jacket" width="20" height="20" color="black"/>
            <a href='https://www.facebook.com/tojan.bukhari'><img style={{marginLeft:'5px'}} src={face} alt="Girl in a jacket" width="20" height="20"/></a>
            <a href='https://app.slack.com/user_profile/U019H171TU4'><img style={{marginLeft:'5px'}} src={insta} alt="Girl in a jacket" width="20" height="20"/></a>
            <a href='https://app.slack.com/user_profile/U019H171TU4'><img style={{marginLeft:'5px'}} src={tele} alt="Girl in a jacket" width="20" height="20"/></a>
     </div>
    )
}
