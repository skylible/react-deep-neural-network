import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from '../src/layouts/navbar';

function About() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="sm">
        <p>Created by Widi and Teams</p>
      </Container>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </div>
  );
}

export default About;
