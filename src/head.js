import React, { useState } from "react";
import T from './images/T.jpg'
import face from './images/facebook.png';
import insta from './images/instagram.png';
import ino from './images/linkedin.png';
import mail from './images/email.png';
import tele from './images/tele.png';
import git from './images/git.png';
import { makeStyles } from '@material-ui/core/styles';
  const useStyles = makeStyles((theme) => ({
      Link:{
            // textDecoration: 'non',fontSize: "16px",
            // listStyle: 'non',
            // width: '50p%',
            // height: '100%',
            // justifyContent: 'space-around',
            // alignItems: 'center',
            flexDirection: 'column'
        },
    }));
export default function Head() {
    const classes = useStyles();
    return (
        <div style={{
            display:'grid',
            gridRow:'50% 40% 1fr'
        }}
        >
            <div><img alt="complex" src={T} width= '200' height= '300' style={{margin:'5px'}} /></div>
            <div style={{
                height:'300px'
            }}>
                <h2>FullStack-Software-Engineer </h2> <br/>
                <h3>Active worker</h3>
                <div>
                <ul className={classes.Link} >
                    <li style={{color:'black',textDecoration: 'non',fontSize: "16px",marginTop:'30px',listStyle: 'none' }}><a style={{color:'black',textDecoration: 'non',fontSize: "16px"}} href='/about'>Aboute</a></li>
                    <li style={{color:'black',textDecoration: 'non',fontSize: "16px",marginTop:'30px',listStyle: 'none'}}><a style={{color:'black',textDecoration: 'non',fontSize: "16px"}} href='/progects'>Projects</a></li>
                    <li style={{color:'black',textDecoration: 'non',fontSize: "16px",marginTop:'30px',listStyle: 'none'}}><a style={{color:'black',textDecoration: 'non',fontSize: "16px"}} href='/contact'>Contact</a></li>
                </ul>
                </div>
            </div>
            <div>
            <a href='linkedin.com/in/tojan-bukari'><img style={{marginLeft:'5px'}}src={ino} alt="Girl in a jacket" width="20" height="20"/></a>
            <a href='https://www.facebook.com/tojan.bukhari'><img style={{marginLeft:'5px'}} src={face} alt="Girl in a jacket" width="20" height="20"/></a>
            <a href='https://app.slack.com/user_profile/U019H171TU4'><img style={{marginLeft:'5px'}} src={insta} alt="Girl in a jacket" width="20" height="20"/></a>
            <a href='https://github.com/tojan-bukhari?tab=repositories'><img style={{marginLeft:'5px'}} src={git} alt="Girl in a jacket" width="20" height="20"/></a>
            <div>
            <img style={{marginLeft:'5px'}} src={mail} alt="Girl in a jacket" width="20" height="20" color="black"/>  tojan333@gmail.com <br/>
            <a href='https://app.slack.com/user_profile/U019H171TU4'><img style={{marginLeft:'5px'}} src={tele} alt="Girl in a jacket" width="20" height="20"/></a> 0786724179
            </div>
            </div>
        </div>
        // <div style={{
        //     width: '600px',
        //     backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
        //     borderRadius: '1rem',
        //     padding: '70px',
        //     // boxShadow: '3px 10px 10px black' ,
        //     margin:'auto'       
        // }}
        // >
        //     <h2 style={{fontFamily: 'Times New Roman, Times, serif', fontColor:'red'}}>Tojan Bukhari</h2>
        //     <img alt="complex" src={t} width= '50' height= '50' style={{margin:'5px'}} />
        // </div>
    )
}