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
import Fab from "@material-ui/core/Fab";
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
import AddIcon from "@material-ui/icons/Add";

import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";


import Chart from "./Chart.js";

import Schedule from "./Schedule";

//import {theme} from './theme/theme';

import DisplayBox from './DisplayBox'

import {getFermenterConfig, updateFermenter, sendFile} from "../store/actions/brewActionsOld"

import {getRecipe} from "../store/actions/recipeActions"
import {updateSession} from "../store/actions/sessionActions"


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
  stepper: {
    color: theme.palette.primary.constrastText,
    backgroundColor: theme.palette.background.default,
    height: 0,
    padding: 12,
  },
  topBar: {
    height: '100%'
  }
}));

export default function Recipe() {
  const classes = useStyles();


  const dispatch = useDispatch();



  //Call this once - similar to onMount see https://reactjs.org/docs/hooks-overview.html
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(getRecipe());
  }, []); //Use [] to make sure this doesn't re-run


 

  const onChange = (event) => {
    
    const fileButton = document.getElementById('upload-photo');
    const file = fileButton ? fileButton.files[0] : null;

    if( file ) {
        let data = new FormData();
        data.append('file', file);
        dispatch(sendFile(data));
    }
    


  };


  return (
    <div>
    <Container maxWidth="xl">
        


      <Grid container spacing={2}>



          <Grid item xs={4}>
          <Card>
            <CardHeader

action={
  <label htmlFor="upload-photo">
<input
style={{ display: "none" }}
id="upload-photo"
name="upload-photo"
type="file"
onChange={onChange}
/>
<Fab
color="secondary"
size="small"
component="span"
aria-label="add"
variant="extended"
>
<AddIcon /> Upload BeerXml
</Fab>

</label>
}
              title="Recipe"
              titleTypographyProps={{ "color": "textPrimary" }}
              
            />
            <CardContent>

            <Grid container spacing={2}>
            
            <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">Recipe Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            
            
          />
        </FormControl>
        </Grid>
  
        <Grid item xs={6}>
            <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">Style</InputLabel>
          <Input
            id="standard-adornment-amount"
            
            
          />
        </FormControl>
        </Grid>
  
        <Grid item xs={3}>
            <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">OG</InputLabel>
          <Input
            id="standard-adornment-amount"
            
            
          />
        </FormControl>
        </Grid>
        
        <Grid item xs={3}>
            <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">FG</InputLabel>
          <Input
            id="standard-adornment-amount"
            
            
          />
        </FormControl>
        </Grid>
        
  
        </Grid>


       
            </CardContent>
           
          </Card>
          </Grid>





          
          <Grid item xs={4}><DisplayBox title="RECIPE">
          <Grid container spacing={2}>
            
          <Grid item xs={12}>
          <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Recipe Name</InputLabel>
        <Input
          id="standard-adornment-amount"
          
          
        />
      </FormControl>
      </Grid>

      <Grid item xs={6}>
          <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Style</InputLabel>
        <Input
          id="standard-adornment-amount"
          
          
        />
      </FormControl>
      </Grid>

      <Grid item xs={3}>
          <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">OG</InputLabel>
        <Input
          id="standard-adornment-amount"
          
          
        />
      </FormControl>
      </Grid>
      
      <Grid item xs={3}>
          <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">FG</InputLabel>
        <Input
          id="standard-adornment-amount"
          
          
        />
      </FormControl>
      </Grid>
      

      </Grid>
          </DisplayBox>
          </Grid>
          <Grid item xs={3}>
            <DisplayBox title="actions" icon={PowerSettingsNewIcon} className={classes.topBar}>
              <br/>
              <Button variant="contained" color="secondary" onClick={()=> dispatch(updateSession({phase:'BREW_START', mode:"ACTIVE"}))}>Start Brew</Button>
            </DisplayBox>
          </Grid>
          
          </Grid>
    


    </Container>
    </div>
  );
}
