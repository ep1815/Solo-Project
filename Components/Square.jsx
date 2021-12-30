// DESCRIPTION
// renders an individual square component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

// object that contains the four squareID's, for use with randomizer below
const squareOptions = {
    0: "red",
    1: "blue",
    2: "yellow",
    3: "green",
}

// randomizer that randomly picks one of the above squareIDs to dispatch upon runSequence
function randomSquare() {
    return squareOptions[Math.floor(Math.random() * 4)]
}

// function that waits 1 second before resolving callback 
// used to make square light up for enough time
function resolveAfter1Second(callback) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (callback) {
                resolve(callback);
            } else resolve('waited')
        }, 1000);
      });
}

// function that waits 1/3 second before continuing
// used to create buffer between square flashes, and to change colors onclick
function resolveAfterThirdSecond(callback) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (callback) {
                resolve(callback)
            } else resolve("waited");
        }, 333);
      });
}

async function sequenceLoop(array, color) {
    await resolveAfter1Second();
    for (let i = 0; i < array.length; i++) {
        let currSquare = document.getElementById(`${array[i]}`);
        let storedColor = currSquare.style.backgroundColor;
        currSquare.style.borderColor = 'blue';
        currSquare.style.backgroundColor = 'black';
        await resolveAfter1Second();
        currSquare.style.borderColor = 'black';
        currSquare.style.backgroundColor = storedColor;
        await resolveAfterThirdSecond();
    }
    await resolveAfter1Second();
}

const mapStateToProps = state => (
    {
        score: state.boxes.score,
        sequence: state.boxes.sequence,
        playerSequence: state.boxes.playerSequence,
        index: state.boxes.index
    }
)

const mapDispatchToProps = dispatch => ({
    runSequence: () => dispatch(actions.runSequence(randomSquare()))
})

class Square extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div onClick={async () => {
                console.log("this is this.props.sequence: ", this.props.sequence);
                console.log("this is this.props.sequence at final index: ", this.props.sequence[this.props.sequence.length - 1]);
                console.log("this is this.props.playerSequence: ",this.props.playerSequence);
                console.log("this is this.props.playerSequence at final index: ",this.props.playerSequence[this.props.index]);
                if (this.props.sequence[this.props.sequence.length - 1] == this.props.playerSequence[this.props.sequence.length - 1]) {
                    console.log("hello")
                    return (
                    await this.props.runSequence(),
                    await sequenceLoop(this.props.sequence, this.props.color)
                    );
                }
            }}>
            <button 
            style={{width: '100px', height: '100px', 
            border: '5px solid black', margin: '15px'}} 
            id={this.props.color}
            // onclick dispatches the color prop (red-box, blue-box, etc.)
            // to the boxesReducer
            onClick={async () => {
                this.props.colorChange(this.props.color); 
                await this.props.boxClick(this.props.color);
                await resolveAfter1Second();
            }}
            ></button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Square);