import sampleSize from 'lodash.samplesize';
import React, { Component } from 'react';
import './App.css';

import Cell from './Cell.js'

const messages = {
    'win': 'You won...',
    'lose': 'Game Over',
    'challenge': 'Remember these cells',
    'play': 'Pick a cell'
}

class App extends Component {
    timerId;
    state = {
        gameStatus: 'challenge', // 'challenge', 'play', 'win', 'lose'
        clickedCells : []
    };
    // read: this.state.answer
    // this.setState({ answer: 37 });

    cellIds = Array.from({ length: 16 }, (_, i) => i);
    challengeCellIds = sampleSize(this.cellIds, 6);

    componentDidMount() {
        this.timerId = setTimeout(() => {
            this.setState({
                gameStatus: 'play',
            }) // give it an object or function that returns an object
        }, 3000);
    }

    ComponentWillUncount() {
        clearTimeout(this.timerId);
    }

    isCellActive = id => {
        const isCellChallenge = this.challengeCellIds.indexOf(id) >= 0;
        return isCellChallenge && this.state.gameStatus === 'challenge';
    }

    onCellClick = cellId => {
        const isCellChallenge = this.challengeCellIds.indexOf(cellId) >= 0;
        console.log(isCellChallenge);
        // closures gives access to this.setState
        this.setState((prevState) => {
            return {
                clickedCells: [...this.state.clickedCells, cellId],
            }
        });
    };

    render() {
        console.log(this.challengeCellIds);
      return (
          <div className="game">
              <div className="help">
                  You will have 3 seconds to memorize X blue random cells
        </div>
              <div className="grid">
                  {this.cellids.map(i => {
                      const isCellChallenge = this.challengeCellIds.indexOf(i) >= 0;
                      const isCellClicked = this.state.clickedCells.indexOf(i) >= 0;

                      return (
                          <Cell
                              key={i}
                              id={i}
                              onClickAction={this.onCellClick(i)}
                              isActive={this.isCellActive(i)}
                              isChallenge={isCellChallenge}
                              isClicked={isCellClicked}
                          />
                        );
                  })}
              </div>
              <button>Start</button>
              <div className="message">
                  {this.messages[this.state.gameStatus];}
              </div>
          </div>
      );
  }
}

export default App;
