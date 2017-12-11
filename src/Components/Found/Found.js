import React from 'react';
import './Found.css';

const Found = (props) => {
    return (
        <div className="search-count">
            {`Trails found: ${props.trailsFound}`}
        </div>
    )
}

export default Found;