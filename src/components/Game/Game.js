import React, { Component } from 'react'

import Board from '../Board/Board';
import Hand from '../Hand/Hand';

class Game extends Component {

    render() {
        return (
            <div className="game_container">
                <Board />
                <Hand />
            </div>
        )
    }
}

export default Game;