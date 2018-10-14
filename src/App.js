import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavComponent from './NavComponent';
import Form from './Form';
import Home from './Home';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <NavComponent addNewElement={this.addNewElement}></NavComponent>
        </header>
        <Route exact path='/' component={Home}/>
        <Route path='/form' component={Form}/>
      </div>
      </Router>
    );
  } //PARA PASAR PROPS NECESITO USAR RENDER='' Y DEVUELVO HTML
}

export default App;