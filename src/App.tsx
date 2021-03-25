import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './MuiTheme'
import Header from './Components/Header'
import Navigate from './Components/Navigate'
import MainPage from './Components/MainPage';
import PostPage from './Components/PostPage'
import './App.css';

function App() {

  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Navigate />
        <Router>
          <MainPage path='/' />
          <PostPage path="/:title/:id" />
      </Router>
      </MuiThemeProvider>
   </Fragment>
  );
}

export default App;
