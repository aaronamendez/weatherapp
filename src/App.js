import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

         <div className="container">
             <div className="row">
                 <div className="col days"> Sunday </div>
                 <div className="col days"> Monday </div>
                 <div className="col days"> Tuesday </div>
                 <div className="col days"> Wednesday </div>
                 <div className="col days"> Thursday </div>
                 <div className="col days"> Friday </div>
                 <div className="col days"> Saturday </div>
             </div>
         </div>
      </div>
    );
  }
}

export default App;
