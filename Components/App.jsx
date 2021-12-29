// DESCRIPTION
// renders the Box component

import React, { Component } from 'react';
import Box from './Box.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <Box/>
            </div>
        );
    };
};

export default App;