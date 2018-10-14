import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: '',
            pswd: ''
        };
    }

    /*handleChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }*/

    handleSubmit = (event) => {
        event.preventDefault(); //Para evitar efectos secundarios.

        this.props.history.push('/home');
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <span> Usuario: </span>
                <input type="text" name="user" ref={(el) => this.textInput = el} value='Bobby' onChange={this.handleChange}/>

                <span> Password: </span>
                <input type="text" name="pswd" value='Asd' onChange={this.handleChange}/>

                <button type="submit"> Ingresar </button>
            </form>
        )
    }
}