// DESCRIPTION
// Renders four square components

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Square from './Square.jsx';
import * as actions from '../actions/actions.js';

const num = 0;

// creates functions that will dispatch action creators
// corresponding color's action will be passed down to Square via props
const mapDispatchToProps = dispatch => ({
    redBoxClick: (squareID) => dispatch(actions.redBoxClick(squareID)),
    blueBoxClick: (squareID) => dispatch(actions.blueBoxClick(squareID)),
    yellowBoxClick: (squareID) => dispatch(actions.yellowBoxClick(squareID)),
    greenBoxClick: (squareID) => dispatch(actions.greenBoxClick(squareID))
})

class Box extends Component {
    render() {
        return (
            <div className='box'>
                <h2>Your score: {num}</h2>
                <Square className='square' color='red-box' boxClick={this.props.redBoxClick}/>
                <Square className='square' color='blue-box' boxClick={this.props.blueBoxClick}/>
                <Square className='square' color='yellow-box' boxClick={this.props.yellowBoxClick}/>
                <Square className='square' color='green-box' boxClick={this.props.greenBoxClick}/>
            </div>
        )
    }
}

export default connect(mapDispatchToProps) (Box);