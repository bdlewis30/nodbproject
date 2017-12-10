import React, { Component } from 'react';
import './Results.css';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.result.name,
            city: props.result.city,
            state: props.result.state,
            description: props.result.description || '',
            // directions: props.result.direction,
            map: `https://www.google.com/maps/@${props.result.latitude},${props.result.longitude},15z`,
            latitude: props.result.latitude,
            longitude: props.result.longitude,
            id: props.result.id
        }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.updateDesc = this.updateDesc.bind(this);
        this.deleteTrail = this.deleteTrail.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            name: newProps.result.name,
            city: newProps.result.city,
            state: newProps.result.state,
            description: newProps.result.description || '',
            // directions: newProps.result.direction,
            map: `https://www.google.com/maps/@${newProps.result.latitude},${newProps.result.longitude},15z`,
            latitude: newProps.result.latitude,
            longitude: newProps.result.longitude,
            id: newProps.result.id
        })
    }

    handleDescriptionChange(event){
        this.setState({
            description: event.target.value
        })
    }

    updateDesc(){
        axios.put('/api/' + this.state.id, {description: this.state.description});
    }

    deleteTrail(){
        axios.delete('/api/' + this.state.id)
        .then(() => {
            this.props.deletedTrail();
        })
    }


    render() {
        return (
            <tr>
                <td>{this.state.name}</td>
                <td>{this.state.city}, {this.state.state}</td>
                <td><textarea onChange={this.handleDescriptionChange} onBlur={this.updateDesc} value={this.state.description}/></td>
                {/* <td>{this.state.directions}</td> */}
                <th><a href={this.state.map} target="_blank" rel="noopener noreferrer" >Map</a></th>
                <td>{this.state.latitude}</td>
                <td>{this.state.longitude}</td>
                <td><span className="glyphicon glyphicon-remove" onClick={this.deleteTrail}/></td>
            </tr>
        )
    }
}

Results.defaultProps = {
    deletedTrail: function(){}
}

Results.propTypes = {
    result: PropTypes.object.isRequired,
    deletedTrail: PropTypes.func
}