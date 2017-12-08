import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locState: '',
            city: ''
        }
        
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleButton = this.handleButton.bind(this); 
    }
    
    handleChangeCity(value) {
        console.log(this.state.city)
        this.setState({city: value});
    }

    handleChangeState(value) {
        console.log(this.state.locState)
        this.setState({locState: value});
    }

    handleButton() {
        return alert(`Your request to find a hiking trail in ${this.state.city}, ${this.state.locState}, has been sent.`);
    }

    render() {
        return (
            <div>
                {/* <section className="header">Find Your Place</section> */}
                <div className="input-boxes">
                    <input className="input-one" placeholder="City" value={this.state.city} onChange={(event) => this.handleChangeCity(event.target.value) } />
                    <input className="input-two" placeholder="State" value={this.state.locState} onChange={(event) => this.handleChangeState(event.target.value) } />
                </div>
                <div className="submit-btn">
                    <button onClick={ this.handleButton }>Submit</button>
                </div>
            </div>
        )
    }
}