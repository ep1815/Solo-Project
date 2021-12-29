// DESCRIPTION
// renders an individual square component

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Square extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <button 
            style={{width: '100px', height: '100px', 
            border: '5px solid black', margin: '15px'}} 
            id={this.props.color}
            // onclick dispatches the color prop (red-box, blue-box, etc.)
            // to the boxesReducer
            onClick={() => {this.props.colorChange(this.props.color); return this.props.boxClick(this.props.color)}}
            ></button>
        )
    }
}

export default Square;