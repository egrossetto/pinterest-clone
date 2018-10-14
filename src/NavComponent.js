import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './Form';
import App from './App';
import Home from './Home';

export default class NavComponent extends Component {
    render() {
      return (
        <nav>
          <div>
            <Link to="/" >HOME</Link>
            <Link to="/form">FORM</Link>
            <Link to="/">NOSE</Link>
            <input type="text" name="search" />
            <button style={{marginLeft: 5 + 'px'}}>Buscar</button>
          </div>
        </nav>
      )
    }
  }