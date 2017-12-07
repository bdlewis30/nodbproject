import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
    constructor() {
        super();

        this.state = {
            text: 'Start Typing'
        }
    }
    handleChange(event){
        this.setState({
            text: event.target.value
        })
    }

    handleButton(){
        alert(this.state.text)
    }

    render() {
        return (
            <div className="main">
                <section className="header">Header</section>
                <input value={this.state.text} onChange={ (event) => {this.handleChange(event.target.value)}} />
                <button>Submit</button>
            </div>
        )
    }
}