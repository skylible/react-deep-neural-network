import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {
  Toolbar, Typography, IconButton,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: (props) => props.color,
  },
});

function Navbar(props) {
  const classes = useStyles(props);
  return (
    <div className="Navbar">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <ShareIcon />
          </IconButton>
          <Typography className={classes.title}>
            Deep Neural Network Simulator
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

  );
}

export default Navbar;
