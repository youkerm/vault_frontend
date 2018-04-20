import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
    Route,
    Switch,
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomePage from './pages/HomePage';
import PlatformPage from './platform/PlatformPage';
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>

                <Navigation/>

                <div style={{padding: "10px", maxWidth:"1200px", margin:"auto"}}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/platform" component={PlatformPage} />
                    </Switch>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
