import React, { Component } from 'react';
import './Results.css';

export default class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
        }
        //set this
    }

    //methods


    render() {
        return (
            <div>
                <textarea className="results" placeholder="This is where the API info will render."></textarea>
            </div>
        )
    }
}