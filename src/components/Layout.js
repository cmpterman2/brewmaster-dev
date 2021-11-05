import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { red, blue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { resetError } from "../store/actions/errorActions.js";
import {getSystemConfig, setFullScreen} from "../store/actions/systemActions2.js";

import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { Link, Switch, Route } from "react-router-dom";

import App from './Fermentation.js';
import Session from './Session.js'

import Upload from './Upload.js';

import Chart from "./Chart.js";



import { CssBaseline } from "@material-ui/core";


import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Fullscreen from "react-full-screen";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    "background-color": theme.palette.background.dark
  },
  fullscreen: {
    flexGrow: 1,
    "background-color": theme.palette.background.dark,
    height : '100%'
  },
  top: {
    backgroundcolor: theme.palette.background.dark
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: '60px',
  },
  stepper: {
    color: theme.palette.primary.constrastText,
    backgroundColor: theme.palette.background.default,
    height: 0,
    padding: 12,
  },
  foo: {
    color: blue[600],
  },
  foo: {
    color: theme.palette.text.secondary,
    backgroundColor: blue[600],

    height: 0
  },
  alert: { top: '10%' },
}));

const Layout = () => {
  const classes = useStyles();
  const message = useSelector(state => state.error.message);
  const socket = useSelector(state => state.socket,shallowEqual);
  const isFull = useSelector(state => state.system.isFull);

  const dispatch = useDispatch();


  //Call this once - similar to onMount see https://reactjs.org/docs/hooks-overview.html
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(getSystemConfig());
  }, []); //Use [] to make sure this doesn't re-run


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(resetError());

    //setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Fullscreen enabled={isFull} onChange={(isFull) => dispatch(setFullScreen(isFull))}>
          <div className={classes.fullscreen}>

          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <img src="/assets/edited.png" alt="logo" className={classes.logo} />
              <Typography variant="h4" className={classes.title}>BrewMaster Pro 2.0</Typography>
              <Link to="/fermentation">Fermentation</Link>
              <Link to="/upload">Upload</Link>
              <Button color="inherit">Login</Button>
              icon
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=> dispatch(setFullScreen(!isFull))}><FullscreenIcon/></IconButton>

            </Toolbar>
          </AppBar>
          <Divider />
          <br />
          


        {message &&
          <Snackbar anchorOrigin={{vertical:'top', horizontal:'center'}} open autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        </Snackbar>
        }



            

        <Switch>

          <Route path="/session" component={Session}></Route>
        </Switch>
        </div>
        </Fullscreen>
          </div >
  );
}

export default Layout;
