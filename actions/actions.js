// DESCRIPTION
// action creator functions

// squareID REFERS TO THE BOX'S ID PROP (red-box, blue-box, etc.), this is what's
// sent to the reducer to identify which box was clicked and how to interact with it


// triggers if red box is clicked
export const redBoxClick = squareID => ({
    type: 'RED_BOX_CLICK',
    payload: squareID
});

// triggers if blue box is clicked
export const blueBoxClick = squareID => ({
    type: 'BLUE_BOX_CLICK',
    payload: squareID
});

// triggers if yellow box is clicked
export const yellowBoxClick = squareID => ({
    type: 'YELLOW_BOX_CLICK',
    payload: squareID
});

// triggers if green box is clicked
export const greenBoxClick = squareID => ({
    type: 'GREEN_BOX_CLICK',
    payload: squareID
});

// triggers when you want run sequence (i.e. on load and on successful round completion)
export const runSequence = randomSquare => ({
    type: 'RUN_SEQUENCE',
    payload: randomSquare,

});

// triggers when you hit the reset button
export const reset = () => ({
    type: 'RESET',
    payload: 'reset',
})