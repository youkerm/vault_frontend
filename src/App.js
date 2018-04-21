import React, { Component } from 'react';
import './App.css';

import {
    Route,
    Switch,
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomePage from './pages/HomePage';
import PlatformPage from './platform/PlatformPage';
import AirdropRegisterPage from './pages/AirdropRegisterPage';
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <Navigation/>

                <div style={{padding: "10px", maxWidth:"1200px", margin:"auto"}}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/platform" component={PlatformPage} />
                        <Route path="/airdrop-registration" component={AirdropRegisterPage} />
                    </Switch>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
