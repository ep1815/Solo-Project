// DESCRIPTION
// reducer for boxes data -- takes actions sent from boxes ONCLICK
// and updates STATE accordingly

const initialState = {
    sequence: [],
    playerSequence: [],
    index: 0,
    score: -1
}

const boxesReducer = (state = initialState, action) => {
    let newSequence;
    let newPlayerSequence;
    switch (action.type) {
        // create switch cases for each possible input squareID
        case 'RED_BOX_CLICK': {
            newPlayerSequence = state.playerSequence;
            newPlayerSequence[state.index] = action.payload;
            // console.log("new player sequence: " , newPlayerSequence)
            if (newPlayerSequence[state.index] !== state.sequence[state.index]) {
                alert("WRONG!!! Hit Reset button to start over")
            }
            return {
                ...state,
                sequence: state.sequence,
                playerSequence: newPlayerSequence,
                index: state.index + 1,
                score: state.score
            }
        }
        case 'BLUE_BOX_CLICK': {
            newPlayerSequence = state.playerSequence;
            newPlayerSequence[state.index] = action.payload;
            // console.log("new player sequence: " , newPlayerSequence)
            if (newPlayerSequence[state.index] !== state.sequence[state.index]) {
                alert("WRONG!!! Hit Reset button to start over")
            }
            return {
                ...state,
                sequence: state.sequence,
                playerSequence: newPlayerSequence,
                index: state.index + 1,
                score: state.score
            }
        }
        case 'YELLOW_BOX_CLICK': {
            newPlayerSequence = state.playerSequence;
            newPlayerSequence[state.index] = action.payload;
            // console.log("new player sequence: " , newPlayerSequence)
            if (newPlayerSequence[state.index] !== state.sequence[state.index]) {
                alert("WRONG!!! Hit Reset button to start over")
            }
            return {
                ...state,
                sequence: state.sequence,
                playerSequence: newPlayerSequence,
                index: state.index + 1,
                score: state.score
            }
        }
        case 'GREEN_BOX_CLICK': {
            newPlayerSequence = state.playerSequence;
            newPlayerSequence[state.index] = action.payload;
            // console.log("new player sequence: " , newPlayerSequence)
            if (newPlayerSequence[state.index] !== state.sequence[state.index]) {
                alert("WRONG!!! Hit Reset button to start over")
            }
            return {
                ...state,
                sequence: state.sequence,
                playerSequence: newPlayerSequence,
                index: state.index + 1,
                score: state.score
            }
        }
        // reducer for sequence; called on load (when first sequence is run)
        // and whenever player successfully completes a round
        case 'RUN_SEQUENCE': {
            newSequence = state.sequence;
            newSequence.push(action.payload);
            // console.log(newSequence);
            return {
                ...state,
                sequence: newSequence,
                playerSequence: [],
                index: 0,
                score: state.score + 1,
            }
        }
        // runs when player hits the reset button, resets game back to square one
        case 'RESET': {
            return {
                ...state,
                sequence: [],
                playerSequence: [],
                index: 0,
                score: -1
            }
        }
        default:
            return state;
    }
}

export default boxesReducer;