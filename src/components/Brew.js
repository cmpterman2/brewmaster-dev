import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { red, blue } from "@material-ui/core/colors";
import RestoreIcon from "@material-ui/icons/Restore";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import TimerIcon from '@material-ui/icons/Timer';

import Chart from "./Chart.js";



import DisplayBox from './DisplayBox'

import {getBrewConfig, getBrewState} from "../store/actions/brewActions"



import {updateSession, undoLastSession} from "../store/actions/sessionActions"


const useStyles = makeStyles(theme => ({

}));

const nextPhase = (phase) => {
  switch(phase) {
    case 'BREW_START' : return 'BREW_PREMASH';
    case 'BREW_PREMASH' : return 'BREW_MASH';
    case 'BREW_MASH' : return 'BREW_PREBOIL';
    case 'BREW_PREBOIL' : return 'BREW_BOIL';
    case 'BREW_BOIL' : return 'BREW_COOL';
    case 'BREW_COOL' : return 'BREW_DONE';
    case 'BREW_DONE' : return 'FERMENTATION_START';

  }
  return phase;

}

const phaseLabel = (phase) => {
  switch(phase) {
    case 'BREW_PREMASH' : return 'Start Pre-Mash';
    case 'BREW_MASH' : return 'Start Mash';
    case 'BREW_PREBOIL' : return 'Start Pre-Boil';
    case 'BREW_BOIL' : return 'Start Boil';
    case 'BREW_COOL' : return 'Start Cooling';
    case 'BREW_DONE' : return 'Brew Complete';
    case 'FERMENTATION_START' : return 'Switch to fermentation';
    
  }
  return phase;

}


export default function ButtonAppBar() {
  const classes = useStyles();


  const dispatch = useDispatch();


  const phase = useSelector(state => state.session.config.phase);
  const phaseTime = useSelector(state => state.session.config.phaseTime);
  const mode = useSelector(state => state.session.config.mode);
  const deviceMode = useSelector(state => state.brew.config.mode);
  const target = useSelector(state => state.brew.config.target);
  const temp = useSelector(state => state.brew.state.temp);

  
  
  console.log(nextPhase(phase));


    





  //Call this once - similar to onMount see https://reactjs.org/docs/hooks-overview.html
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(getBrewConfig());
    dispatch(getBrewState());
  }, []); //Use [] to make sure this doesn't re-run





  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          
          </Grid>
          <Grid item xs={2}><DisplayBox title="kettle temperature" display={temp + ' °F'} className={classes.topBar}/></Grid>
          <Grid item xs={2}><DisplayBox title="target temperature" display={target + ' °F'} className={classes.topBar}/></Grid>
          <Grid item xs={2}><DisplayBox title="device state" display={deviceMode} className={classes.topBar}/></Grid>
          
          <Grid item xs={3}>
            <DisplayBox title="mode" display={mode} />
          </Grid>
          <Grid item xs={3}>
            <DisplayBox title="actions" icon={PowerSettingsNewIcon} className={classes.topBar}>
              
              <br/>
              <Button variant="outlined" color="secondary" startIcon={(<RestoreIcon/>)} onClick={()=> dispatch(undoLastSession())}>Back</Button>
              <Button variant="contained" color="secondary" endIcon={(<ArrowForwardIos/>)} onClick={()=> dispatch(updateSession({phase:nextPhase(phase), mode:"ACTIVE"}))}>{phaseLabel(nextPhase(phase))}</Button>
              <br />
              <Button variant="outlined" color="secondary" onClick={()=> dispatch(updateSession({phase, mode: (mode === 'ACTIVE')?'PAUSED':'ACTIVE' }))}>{(mode === 'ACTIVE')?'PAUSE':'UNPAUSE'}</Button>
            </DisplayBox>
          </Grid>
          <Grid item xs={3}><DisplayBox title="phase start time" display={new Date(phaseTime).toLocaleTimeString()+''} className={classes.topBar}/></Grid>


      </Grid>
    </Container>
  );
}
