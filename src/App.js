import React, { Component } from 'react';
import {
  Start,
  Navbar,
  FirstSection
} from './components'
import {Route} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        {
          this.props.children || <FirstSection/>
        }
      </div>
    );
  }
}

export default App;
