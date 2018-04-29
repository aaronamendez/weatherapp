import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '20a3b07df621cd3bf33e6372d8b81f54';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
