import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import PuppyAdoption from './PuppyAdoption/PuppyAdoption'
import store from './stores/redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider store={store}>
          <PuppyAdoption />
        </Provider>
      </div>
    );
  }
}

export default App;
