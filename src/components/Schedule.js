import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Input from "@material-ui/core/Input";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import DropDownMenu from "./DropDownMenu";
import Typography from "@material-ui/core/Typography";
import {editSchedule, editScheduleCancel, editScheduleRow, removeScheduleRow, updateFermenter} from "../store/actions/fermenterActions";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import HighlightOff from "@material-ui/icons/HighlightOff";




const useStyles = makeStyles({
  table: {
    minWidth: 50
  },
  head: {
    fontWeight: 700  
  },
  actions: {
    flexGrow: 1
  }
});


const Schedule = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  

  const { schedule, editConfig, ...rest } = props;

  const edit = editConfig ? true : false;
  const data = editConfig ? [...editConfig.schedule, {id:editConfig.schedule.length, day:"", target:""}] : schedule;
  

  const editAction = () =>{
    return dispatch(editSchedule());
  }

  const options = [{name:"Edit Schedule", action:editAction}];


  return (
    
    <Card>
            <CardHeader

              action={
                <DropDownMenu options={options}/>
              }
              title="Temperature Control"
              titleTypographyProps={{ "color": "textPrimary" }}
              subheader="Schedule"
              subheaderTypographyProps={{ "variant": "body2" }}
            />
            <CardContent>
            



      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
          
            <TableCell className={classes.head} align="center">Day</TableCell>
            <TableCell className={classes.head} align="center">Target</TableCell>
            {edit && 
                <TableCell className={classes.head} padding='none'></TableCell>
                
              }

          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map(row => (
            <TableRow key={row.id}>
              


              <TableCell component="th" scope="row" align="center">
                {edit && 
                <Input 
                  value={row.day}
                  name='day'
                  onChange={e => dispatch(editScheduleRow(e, row.id, 'day'))}
                  className={classes.input}
                />
              }
              {!edit && row.day}
              </TableCell>
              <TableCell align="center">
              {edit && 
                <Input 
                  value={row.target}
                  name='target'
                  onChange={e => dispatch(editScheduleRow(e, row.id, 'target'))}
                  className={classes.input}
                />
              }
              {!edit && row.target}
              </TableCell>

              {edit && 
                <TableCell padding='none'>
                  <IconButton size='small' color='primary' aria-label="settings" onClick={e => dispatch(removeScheduleRow(row.id))}>
                  <HighlightOff />
                </IconButton>
                </TableCell>
                
              }
            </TableRow>
          ))}
          


        </TableBody>
      </Table>


      </CardContent>
      {edit &&
            <CardActions>
            <Button  color="primary" onClick={()=> dispatch(editScheduleCancel())} >cancel</Button>
            <Typography className={classes.actions}></Typography>
            
                <Button variant="contained" color="primary" onClick={()=> dispatch(updateFermenter(editConfig))}>save</Button>
                
            </CardActions>
            }
          </Card>
   
  );
}

export default Schedule;