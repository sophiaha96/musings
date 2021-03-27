import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './MuiTheme'
import Header from './Components/Header'
import MainPage from './Components/MainPage';
import PostPage from './Components/PostPage'

function App() {

  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Router>
          <MainPage path='/' />
          <PostPage path="/:title/:chapter/:id" />
      </Router>
      </MuiThemeProvider>
   </Fragment>
  );
}

export default App;
