import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router";


import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import {getSession} from "../store/actions/sessionActions.js";


import Recipe from './Recipe.js';
import Brew from './Brew.js';

import App from './Fermentation.js';

import Upload from './Upload.js';
import { Link, Switch, Route, useLocation } from "react-router-dom";



import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  stepper: {
    color: theme.palette.primary.constrastText,
    backgroundColor: theme.palette.background.default,
    height: 0,
    padding: 12,
  },
}));

const Session = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const phase = useSelector(state => state.session.config.phase);

  const steps = ["Recipe", "Prep", "Mash", "Boil", "Cool", "Ferment", "Done"];


  //Call this once - similar to onMount see https://reactjs.org/docs/hooks-overview.html
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(getSession());
  }, []); //Use [] to make sure this doesn't re-run


  //Check for mis-match on session and current path and redirect
  const path = useLocation().pathname.substring('/session/'.length);
  const pathPhase = phase.split('_')[0].toLowerCase();

  if( path != pathPhase && phase != 'NONE' ) {
    return (<Redirect to={'/session/'+pathPhase}/>)
  } 



  return (
    <div className={classes.root}>


    <Container maxWidth="xl">
        


        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Typography display='inline' variant="h4" color="textSecondary" >
            {phase + ' > '}
          </Typography>
          <Typography display='inline' variant="h4" color="textPrimary" >
            New England IPA
          </Typography>
           
            </Grid>
            <Grid item xs={8}>
            <Stepper nonLinear activeStep={5} className={classes.stepper}>
              {steps.map((label, index) => (
                <Step key={label}  >  
                  <StepButton {...((index < 5) ? {icon: (<CheckCircleOutlineIcon color='disabled'/>)} : {})} 
                    
                    
                  >
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            
            </Grid>
            </Grid>

            </Container>

            

        <Switch>
          <Route exact path="/session/recipe" component={Recipe}></Route>
          <Route exact path="/session/brew" component={Brew}></Route>
          <Route exact path="/session/fermentation" component={App}></Route>
          <Route exact path="/session/upload" component={Upload}></Route>
        </Switch>
        </div>
  );
}

export default Session;
