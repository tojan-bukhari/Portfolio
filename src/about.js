import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import rbk from './images/rbk.png'
import aau from './images/aau.png'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    style:{
        padding: theme.spacing(2),
        backgroundImage: "linear-gradient(to right,  #4dff88 , #3385ff)",
        border: 'none',
        fontColor: 'black',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '15px',
        borderRadius: '8px',
    },
  }));
export default function About() {
    const classes = useStyles();
    return (
        <div style={{
            width: '85%',
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
            borderRadius: '20px',
            padding: '70px',
            textAlign: 'center',
            // boxShadow: '3px 20px 20px black' ,
            margin:'auto',    
            marginTop:'10%',   
        }}
        >
            <h3 style={{textAlign:'left'}} >About Me</h3><br/>
            <h4 style={{textAlign:'left'}}>Education</h4>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image} >
                     <img className={classes.img} alt="complex" src={rbk} />
                   </ButtonBase>
                </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.font} gutterBottom variant="subtitle1">
                  RBK(reboot-Kamp)  <a style={{fontColor:'black'}} href='https://www.rebootkamp.net/courses/'>Link</a> 
                </Typography>
                 <Typography variant="body2" color="textSecondary" >
                   <ul style={{marginLeft:'30px' , textAlign:'left'}}>
                     <li>Learn full Stack JavaScript through pair programming, developing real applications and the most refined, up-to-date curriculum.</li>
                     <li>learn how to interview and negotiate, while building your online presence.</li>
                     <li>Learn About Bootstrap Premium Prep</li>
                     <li>find and apply to the companies of your dreams, while we help you negotiate and leverage our extensive hiring network.</li>
                    </ul>
                 </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">2020-2021</Typography>
            </Grid>
          </Grid>
            </Grid>
            {/* <Grid container spacing={2}>
                <Grid item>
                </Grid>
            </Grid> */}
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                     <img className={classes.img} alt="complex" src={aau} />
                   </ButtonBase>
                </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.font} gutterBottom variant="subtitle1">
                  Amman Arab University <a style={{fontColor:'black'}} href='https://aau.edu.jo/en'>Link</a>
                </Typography>
                 <Typography variant="body2" color="textSecondary" >
                   <ul style={{marginLeft:'30px' , textAlign:'left'}}>
                     <li>studied islamic studys at law collage</li>
                     <li>didn't graduate yet</li>
                     <li>3.41 exellent</li>
                    </ul>
                 </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">2016-2021</Typography>
            </Grid>
          </Grid>
            </Grid>
     </div>
    )
}