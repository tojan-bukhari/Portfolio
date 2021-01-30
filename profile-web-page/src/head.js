import React, { useState } from "react";
import t from './images/t.png'
import c from './images/cloude.png'
export default function head() {
    return (
        <div style={{
            width: '600px',
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
            borderRadius: '1rem',
            padding: '70px',
            // boxShadow: '3px 10px 10px black' ,
            margin:'auto'       
        }}
        
        >
            <h2 style={{fontFamily: 'Times New Roman, Times, serif', fontColor:'red'}}>Tojan Bukhari</h2>
            <img alt="complex" src={t} width= '50' height= '50' style={{margin:'5px'}} />
        </div>
    )
}
