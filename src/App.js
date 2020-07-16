import React from 'react';
import { Container } from '@material-ui/core';
import Main from './layouts/main';
import './App.css';
import Navbar from './layouts/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="sm">
        <Main />
      </Container>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </div>
  );
}

export default App;
