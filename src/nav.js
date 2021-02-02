// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import MediaQuery from 'react-responsive'
// import './nav.css'
// const useStyles = makeStyles((theme) => ({
//     nav:{
//       height : '10vh',
//       backgroundColor: 'black'
//   },
//   // navLink:{
//   //   display: 'flex',
//   //   textDecoration: 'non',fontSize: "16px",
//   //   listStyle: 'non',
//   //   width: '50p%',
//   //   height: '100%',
//   //   justifyContent: 'space-around',
//   //   alignItems: 'center',
//   //   marginLeft: 'auto'

    

//   // },

//   }));
// export default function Nav() {
//     const classes = useStyles();

//     return (
//         <div>
//              <nav className={classes.nav} className='nav'>
//           <div className='humberger'>
//             <div className='line'></div>
//             <div className='line'></div>
//             <div className='line'></div>
//           </div>
//           {/* <MediaQuery maxWidth={'786px'} style={{position: 'fixed',background: 'black',height: '100vh',width: '100%'}}>''
//             <p>You also have a huge screen</p>
//             <ul >
//                 <li style={{color:'white',textDecoration: 'non',fontSize: "16px"}}><a style={{color:'white',textDecoration: 'non',fontSize: "16px"}} href='#'>Aboute</a></li>
//                 <li style={{color:'white',textDecoration: 'non',fontSize: "16px"}}><a style={{color:'white',textDecoration: 'non',fontSize: "16px"}} href='#'>Projects</a></li>
//                 <li style={{color:'white',textDecoration: 'non',fontSize: "16px"}}><a style={{color:'white',textDecoration: 'non',fontSize: "16px"}} href='#'>Contact</a></li>
//             </ul>
//          </MediaQuery> */}
//          <ul className='navLink' >
//                 <li style={{color:'white',textDecoration: 'non',fontSize: "16px"}}><a style={{color:'white',textDecoration: 'non',fontSize: "16px"}} href='#'>Aboute</a></li>
//                 <li style={{color:'white',textDecoration: 'non',fontSize: "16px"}}><a style={{color:'white',textDecoration: 'non',fontSize: "16px"}} href='#'>Projects</a></li>
//                 <li style={{color:'white',textDecoration: 'non',fontSize: "16px"}}><a style={{color:'white',textDecoration: 'non',fontSize: "16px"}} href='#'>Contact</a></li>
//             </ul>
//         </nav>
//         </div>
//     )
// }