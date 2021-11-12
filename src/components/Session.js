import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';


import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import {getSession} from "../store/actions/sessionActions.js";


import Recipe from './Recipe.js';

import App from './Fermentation.js';

import Upload from './Upload.js';
import { Link, Switch, Route } from "react-router-dom";



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

  const steps = ["Recipe", "Prep", "Mash", "Boil", "Cool", "Ferment", "Done"];


  //Call this once - similar to onMount see https://reactjs.org/docs/hooks-overview.html
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(getSession());
  }, []); //Use [] to make sure this doesn't re-run




  return (
    <div className={classes.root}>


    <Container maxWidth="xl">
        


        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Typography display='inline' variant="h4" color="textSecondary" >
            {"Fermentation > "}
          </Typography>
          <Typography display='inline' variant="h4" color="textPrimary" >
            Oatmeal New England IPA (11-06-2021)
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
          <Route exact path="/session/fermentation" component={App}></Route>
          <Route exact path="/session/upload" component={Upload}></Route>
        </Switch>
        </div>
  );
}

export default Session;
