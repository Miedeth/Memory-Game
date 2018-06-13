import React, { PureComponent } from 'react';

const bgColors = {
    normal: 'white',
    challenge: 'lightblue',
    correct: 'lightgreen',
    wrong: 'pink',
};

class Cell extends PureComponent {  // pure components only rerender when props change
    status = () => {
        if (this.props.isActive) {
            return 'challenge';
        }

        if (this.props.isClicked) {
            return this.props.isChallenge ? 'correct' : 'wrong';
        }

        return 'normal';
    };
    handleClick = () => {
        this.props.onClickAction(this.props.id);
    };
    componentDidUpdate(prevProps, prevState) {
        console.log('cdu');
    }
    render() {
        return (
            <div
                className="cell"
                style={{ width: '25%', backgroundColor: bgColors[this.status()] }}
                onClick={this.handleClick}
            />
        );
    }
}

export default Cell;
