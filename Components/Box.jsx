// DESCRIPTION
// Renders four square components along with two buttons

import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import Square from './Square.jsx';
import * as actions from '../actions/actions.js';
import 'regenerator-runtime/runtime.js';

const mapStateToProps = state => (
    {
        score: state.boxes.score,
        sequence: state.boxes.sequence,
        playerSequence: state.boxes.playerSequence
    }
)

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

// function that changes given squareID's color
// used for when you click on the square
async function colorChange(squareID) {
    let currSquare = document.getElementById(`${squareID}`);
    let storedColor = currSquare.style.backgroundColor;
    currSquare.style.borderColor = 'blue';
    currSquare.style.backgroundColor = 'black';
    await resolveAfterThirdSecond();
    currSquare.style.borderColor = 'black';
    currSquare.style.backgroundColor = storedColor;
}

// function that iterates through an array (will be used to iterate through sequence)
// and lights up each for a certain amount of time (1000 ms)
async function sequenceLoop(array) {
    for (let i = 0; i < array.length; i++) {
        let currSquare = document.getElementById(`${array[i]}`);
        let storedColor = currSquare.style.backgroundColor;
        currSquare.style.borderColor = 'blue';
        currSquare.style.backgroundColor = 'black';
        let awaitCurrSquare = await resolveAfter1Second(document.getElementById(`${array[i]}`));
        awaitCurrSquare.style.borderColor = 'black';
        currSquare.style.backgroundColor = storedColor;
        await resolveAfterThirdSecond();
    }
}

// creates functions that will dispatch action creators
// corresponding color's ID will be passed down to Square via props
const mapDispatchToProps = dispatch => ({
    redBoxClick: (squareID) => dispatch(actions.redBoxClick(squareID)),
    blueBoxClick: (squareID) => dispatch(actions.blueBoxClick(squareID)),
    yellowBoxClick: (squareID) => dispatch(actions.yellowBoxClick(squareID)),
    greenBoxClick: (squareID) => dispatch(actions.greenBoxClick(squareID)),
    runSequence: () => dispatch(actions.runSequence(randomSquare())),
    reset: () => dispatch(actions.reset())
})

// function that deals with score displaying as -1 at start
function oneNegator(score) {
    if (score === -1) {
        return 0;
    }
    else return score;
}

// function that compares the playerSequence array to sequence array
// if the same, dispatches the runSequence action and runs the loop
// to be passed down to square to be triggered onClick
async function compareSequences(sequence, playerSequence) {
    console.log("this is sequence: ", sequence);
    console.log("this is playerSequence: ", playerSequence)
    // if (sequence == playerSequence) {
        await resolveAfter1Second;
        return (this.props.runSequence(),
        sequenceLoop(this.props.sequence));
    // }
}

class Box extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        // function nextRound() {
        //     const button = document.getElementById('startButton');
        //     useEffect(() => {
        //         button.current.click();
        //     })
    // }
        return (
            <div className='box'>
                <h2>Your score: {oneNegator(this.props.score)}</h2>
                {/* clicking below button dispatches random squareID to reducer*/}
                <button id="startButton" type="button" onClick={() => {this.props.runSequence(); return sequenceLoop(this.props.sequence);}}>Start Game</button>
                <br></br>
                <Square className='square' color='red' boxClick={this.props.redBoxClick} colorChange={colorChange}/>
                <Square className='square' color='blue' boxClick={this.props.blueBoxClick} colorChange={colorChange}/>
                <Square className='square' color='yellow' boxClick={this.props.yellowBoxClick} colorChange={colorChange}/>
                <Square className='square' color='green' boxClick={this.props.greenBoxClick} colorChange={colorChange}/>
                <br></br>
                <button type="button" onClick={() => {this.props.reset()}}>Reset</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Box);