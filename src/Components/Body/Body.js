import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
    constructor() {
        super();

        this.state = {
            state: '',
            city: ''
        }
    }
    handleChangeState(value) {
        this.setState({
            state: this.event.target.value
        })
    }

    handleChangeCity(value) {
        this.setState({
            city: this.event.target.value
        })
    }

    handleButton() {
        alert(`Your request to find a hiking trail in ${this.state.city}, ${this.state.state} has been sent.`)
    }

    render() {
        return (
            <div className="main-page">
                <section className="header">Find Your Place</section>
                <div className="input-boxes">
                    <input className="input-one" placeholder="City" onChange={(event) => { this.handleChangeCity(event.target.value) }} />
                    <input className="input-two" placeholder="State" onChange={(event) => { this.handleChangeState(event.target.value) }} />
                </div>
                <div className="submit-btn">
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}