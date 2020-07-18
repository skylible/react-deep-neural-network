import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: (props) => props.color,
  },
});

function Header(props) {
  const classes = useStyles(props);
  return (
    <div className="Header" style={classes.Header}>
      <Head>
        <title>React Deep Neural Network</title>
      </Head>

    </div>
  );
}

export default Header;
