import React, { Component } from 'react';
import './Search.css';
import axios from 'axios';
import config from '../../config';

export default class Search extends Component {
    constructor() {
        super();

        this.state = {
            searchState: '',
            searchCity: '',
            radius: ''
        }

        this.handleState = this.handleState.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleRadius = this.handleRadius.bind(this);
    }

    handleCity(value) {
        console.log(this.state.searchCity)
        this.setState({ searchCity: value });
    }

    handleState(value) {
        console.log(this.state.searchState)
        this.setState({ searchState: value });
    }

    handleRadius(value) {
        console.log(this.state.radius)
        this.setState({ radius: value })
    }

    handleButton() {
        axios.get(`https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=${this.state.searchCity}&q[state_cont]=${this.state.searchState}&radius=${this.state.radius}`, config.apiHeader)
            .then(result => {
                console.log(result);
            });
        return alert(`Your request to find hiking trails within a ${this.state.radius} mile radius of ${this.state.searchCity}, ${this.state.searchState}, has been sent.`);
            
    }

    render() {
        return (
            <div>
                <div className="input-boxes">
                    <input placeholder="City" value={this.state.searchCity} onChange={(event) => this.handleCity(event.target.value)} />
                    <input placeholder="State" value={this.state.searchState} onChange={(event) => this.handleState(event.target.value)} />
                    <input placeholder="Mile Radius" value={this.state.radius} onChange={(event) => this.handleRadius(event.target.value)} />
                </div>
                <div className="submit-btn">
                    <button onClick={this.handleButton}>Submit</button>
                </div>
            </div>
        )
    }
}