// DESCRIPTION
// reducer for sequence; called on load (when first sequence is run)
// and whenever player successfully completes a round


// const initialState = {
//     sequence: [],
// };

// const sequenceReducer = (state = initialState, action) => {
//     let newSequence;
//     switch (action.type) {
//         case 'RUN_SEQUENCE': {
//             newSequence = state.sequence;
//             newSequence.push(action.payload);
//             console.log(newSequence);
//             return {
//                 ...state,
//                 sequence: newSequence,
//             }
//         }
//         default: 
//             return state;
//     }
// }

// export default sequenceReducer;