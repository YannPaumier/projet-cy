import React, { Component } from 'react';
import logo from './logo.svg';
import TopBar from './components/TopBar'
import Grid from './components/Grid'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <header className="App-header">
          <Grid />
        </header>
      </div>
    );
  }
}

export default App;
