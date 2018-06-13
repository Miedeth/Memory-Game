import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './App';
import registerServiceWorker from './registerServiceWorker';

class Container extends React.Component {
    state = {
        gameId: 1,
    };

    resetGame = () => {
        this.SetState({ gameId: this.state.gameId + 1 });
    };

    render() {
        return <Game key={this.state.gameId} />
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
