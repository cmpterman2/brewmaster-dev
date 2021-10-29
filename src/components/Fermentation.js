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
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import TimerIcon from '@material-ui/icons/Timer';

import Chart from "./Chart.js";

import Schedule from "./Schedule";

//import {theme} from './theme/theme';

import DisplayBox from './DisplayBox'

import {getFermenterConfig, updateFermenter} from "../store/actions/brewActions"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  foo: {
    color: theme.palette.primary.constrastText,
    backgroundColor: theme.palette.primary.main,
    height: 0
  },
  topBar: {
    height: '100%'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();


  const dispatch = useDispatch();

  const chart = useSelector(state => state.chart, shallowEqual);

  const temp = useSelector(state => state.fermenter.lastReading.displayTemp);
  const airTemp = useSelector(state => state.fermenter.airLastReading.displayTemp);
  const target = useSelector(state => state.fermenter.config.target);
  const mode = useSelector(state => state.fermenter.config.mode);
  const schedule = useSelector(state => state.fermenter.config.schedule, shallowEqual);
  const editConfig = useSelector(state => state.fermenter.editConfig, shallowEqual);
  const config = useSelector(state=> state.fermenter.config, shallowEqual);
  const scheduleStart = useSelector(state => state.fermenter.scheduleStart);
  const fermState = useSelector(state => state.fermenter.state);

  let days = 'Not Started';
  if (scheduleStart > 0 ) {
    const now = new Date();
    days = Number.parseFloat( (now - scheduleStart) /24/60/60/1000).toFixed(1);
  }
  //const socket = useSelector(state => state.socket,shallowEqual);

  const handleBrush = (domain) => {
    // dispatch(handleBrush(domain));
  }


  //Call this once - similar to onMount see https://reactjs.org/docs/hooks-overview.html
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(getFermenterConfig());
  }, []); //Use [] to make sure this doesn't re-run


  const targetDisplay = mode === 'OFF' ? 'OFF' : target + ' °F';


  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography display='inline' variant="h4" color="textSecondary" >
            {"Fermentation > "}
          </Typography>
          <Typography display='inline' variant="h4" color="textPrimary" >
            Oatmeal New England IPA (04-05-2020)
          </Typography>

          </Grid>
          <Grid item xs={2}><DisplayBox title="beer temperature" display={temp + ' °F'} className={classes.topBar}/></Grid>
          <Grid item xs={2}><DisplayBox title="air temperature" display={airTemp + ' °F'} className={classes.topBar}/></Grid>
          <Grid item xs={2}><DisplayBox title="target" display={targetDisplay} icon={TrackChangesIcon} className={classes.topBar}/></Grid>
          <Grid item xs={3}>
            <DisplayBox title="controls" icon={TrackChangesIcon} className={classes.topBar}>
              <br/>
              <Button variant="outlined" color="primary" onClick={()=> dispatch(updateFermenter({...config, mode:"SCHEDULE"}))}>schedule</Button>
              <Button variant="outlined" color="primary" onClick={()=> dispatch(updateFermenter({...config, mode:"AUTO"}))}>target</Button>
            </DisplayBox>
          </Grid>
          <Grid item xs={3}>
            <DisplayBox title="power" icon={PowerSettingsNewIcon} className={classes.topBar}>
              <br/>
              <Button variant="contained" color="secondary" onClick={()=> dispatch(updateFermenter({...config, mode:"OFF"}))}>turn off</Button>
            </DisplayBox>
          </Grid>
          


        <Grid item xs={9}>
        <Card>
            <CardHeader

              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Temperature"
              titleTypographyProps={{ "color": "textPrimary" }}
              subheader="Over Time"
              subheaderTypographyProps={{ "variant": "body2" }}
            />
            <CardContent>
            <Chart chart={chart} dispatch={dispatch} onBrushDomainChange={handleBrush} />
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
          
        </Grid>
        <Grid item xs={3}>
        <DisplayBox title="state" display={fermState} />
        <br/>
        <DisplayBox title="current day" display={days} icon={TimerIcon} />
        <br/>
        
       
          <Schedule schedule={schedule} editConfig={editConfig}/>

         
        </Grid>
      </Grid>
    </Container>
  );
}
