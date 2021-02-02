import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import exam from './images/exam.png';
import tech from './images/tech.png'
import nature from './images/NATURE.png'
import {Button} from 'react-bootstrap';
import git from './images/git.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '85%',
    backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",
  },
  image: {
    width: 300,
    height: 200,
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
      marginLeft:'215px'
  },
}));
export default function ComplexGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>  <br/><br/>
        <div className={classes.paper} style={{borderRadius: '1rem'}}>
        <br/><h3 style={{textAlign:'left'}} >My projects</h3><br/>
      <div className={classes.paper} >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={tech} />
            </ButtonBase>
            <div><Button className={classes.style}><a href='https://drive.google.com/file/d/1wjwvvMMZr-NeT7EEPOwxJE833qw55MZ5/view?usp=sharing'>Demo</a></Button></div>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.font} gutterBottom variant="subtitle1">
                  TECH-KIDS
                </Typography>
                <Typography variant="body2" gutterBottom>
                This website is made for your kid, so he will take the first step to learn the basics of web design.. can learn through descriptions, videos, lessons and exercises.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                learning and have fun this is our approach in this product
                </Typography>
              </Grid>
              <Grid item>
                <div>
                <a href='https://github.com/tojan-bukhari/teck-kids'><img style={{marginLeft:'5px'}} src={git} alt="Girl in a jacket" width="40" height="40"/></a>
                </div>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Jan 9, 2021</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div><br/><br/>
      <div className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={nature} />
            </ButtonBase>
            <div><Button className={classes.style}><a href='https://drive.google.com/file/d/1J3VlQmfrTsFKOhwGHz87V3uBMtkLdSUt/view?usp=sharing'>Demo</a></Button></div>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.font} gutterBottom variant="subtitle1">
                  Faz3etak
                </Typography>
                <Typography variant="body2" gutterBottom>
                The app is for every one who want to to advertise something to sell .
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <a href='https://github.com/Faz3a-teamLegasy/faz3a-enh'>Githup</a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Dec 10, 2020</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div><br/><br/>
      <div className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={exam} />
            </ButtonBase><div><Button className={classes.style}><a href='https://github.com/HUS-C9/mal7oog-project'>Demo</a></Button></div>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.font} gutterBottom variant="subtitle1">
                  Mal7ooG 
                </Typography>
                <Typography variant="body2" gutterBottom>
                Most of tawjihi student doing their tasks randomly, and that might affect their grades, this app helps them avoiding that problem.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                "You may want to delay, but mal7oog won't let you".
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <a href='https://github.com/HUS-C9/mal7oog-project'>Githup</a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Dec 5, 2020</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div> 
      </div><br/><br/> </div>
  );
}