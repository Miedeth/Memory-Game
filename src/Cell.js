import React, { Component } from 'react';

const bgColors = {
    normal: 'white',
    challenge: 'lightblue',
    correct: 'lightgreen',
    wrong: 'red'
}

class App extends Component { // pure components only rerender when props change
    status = () => {
        if (this.props.isActive) {
            return 'challenge';
        }
        
        if (this.props.isClicked) {
            return this.props.isChallenge ? 'correct' : 'wrong';
        }        
    };

    handleClick = () => {
        this.props.onClickAction(this.props.id);
    };

    render() {
        return <div className="cell"
            style={{ width: '25%', backgroundColor: bgColors[this.status()] }}
            onClick={this.handleClick()} /> 
    } 
 }

export default App;
