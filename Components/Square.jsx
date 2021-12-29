// DESCRIPTION
// renders an individual square component

import React, { Component } from 'react';
import { connect } from 'react-redux';
// const Square = props => {

class Square extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(props)
        return (
            <div>
            <button 
            style={{width: '100px', height: '100px', 
            border: '5px solid black', margin: '15px'}} 
            // onClick={{console.log(props)}}
            id={this.props.color}
            // onclick dispatches the color prop (red-box, blue-box, etc.)
            // to the
            onClick={this.props.boxClick(this.props.color)}
            ></button>
            </div>
        )
    }
}

export default Square;