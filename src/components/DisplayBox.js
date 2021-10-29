import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import TrackChangesIcon from '@material-ui/icons/TrackChanges';

const useStyles = makeStyles(theme => ({
  root: {

  },
  title: {
    fontWeight: 500
  },
  icon: {
    color: theme.palette.primary.main,
    height: 32,
    width: 32
  },
}));

const DisplayBox = props => {
  const { className, title, icon, display, children, ...rest } = props;
  
  const Icon = icon;
  const classes = useStyles();


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              {title}
            </Typography>
            {children}
            {!children && <Typography variant="h2">{display}</Typography> }
            
          </Grid>
          
          <Grid item>
            {icon &&
              <Icon className={classes.icon} />
            }
          </Grid>
        </Grid>
        
      </CardContent>
    </Card>
  );
};

DisplayBox.propTypes = {
  className: PropTypes.string
};

export default DisplayBox;
