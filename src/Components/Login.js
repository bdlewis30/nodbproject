import React, { Component } from 'react';

export default class Login extends Component{
    constructor(){
        super();

        this.state = {
            userId: 0,
            username: '',
            password: '',
            users: []
        }

        this.newUser = this.newUser.bind(this);
    }

    newUser(){
        this.setState({
            userId: userId + 1,
            username: username,
            password: password,
            users: []
        })
    }

    render(){

        return(
            <div>
                <button>Login</button>
                <button onCLick={() => {this.newUser}}>Create Account</button>
            </div>
        )
    } 
}