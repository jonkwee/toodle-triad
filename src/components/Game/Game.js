import React, { Component } from 'react'

import Board from '../Board/Board';
import Hand from '../Hand/Hand';

class Game extends Component {

    constructor() {
        super()

        this.state = {
            handOfCards: this.generateHandOfCards()
        }
    }

    generateHandOfCards = () => {
        const handOfCards = []
        for (let i = 0; i < 5; i++) {
            handOfCards.push({
                id: i,
                selected: false,
                top: Math.floor(Math.random() * 9) + 1,
                left: Math.floor(Math.random() * 9) + 1,
                right: Math.floor(Math.random() * 9) + 1,
                bottom: Math.floor(Math.random() * 9) + 1
            })
        }
        return handOfCards;
    }

    render() {
        return (
            <div className="game_container">
                <Board />
                <Hand handOfCards={this.state.handOfCards}/>
            </div>
        )
    }
}

export default Game;