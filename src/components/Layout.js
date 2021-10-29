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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { resetError } from "../store/actions/errorActions.js";
import {getSystemConfig, setFullScreen} from "../store/actions/systemActions2.js";

import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { Link, Switch, Route } from "react-router-dom";

import App from './Fermentation.js';

import Upload from './Upload.js';

import Chart from "./Chart.js";

import { ThemeProvider } from "@material-ui/styles";

import { CssBaseline } from "@material-ui/core";

import {theme} from '../theme/dark-theme';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Fullscreen from "react-full-screen";




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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

  console.log('DEW IT')
  console.log(isFull);
  //console.log(socket);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(resetError());

    //setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Fullscreen
          enabled={isFull}
          onChange={(isFull)=> dispatch(setFullScreen(isFull))}
        >
          <div className="full-screenable-node">
        <ThemeProvider theme={theme}>
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

          <Route exact path="/fermentation" component={App}></Route>
          <Route exact path="/upload" component={Upload}></Route>
        </Switch>
        </ThemeProvider>
        </div>
        </Fullscreen>
          </div >
  );
}

export default Layout;
