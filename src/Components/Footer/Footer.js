import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-text">
                    <p>Database provided by <a href="http://trailapi.com/" target="_blank" rel="noopener noreferrer"> TrailAPI.com </a> Copyright 2012 TrailAPI.</p>
                </div>
            </footer>
        )
    }
}