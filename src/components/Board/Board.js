import React, { Component } from 'react'
import Square from '../Square/Square';

class Board extends Component {

    initializeSquare() {
        return (
            <Square />
        )
    }

    render() {
        return (
            <div className="board">
                <h1 className="board-title">Game board</h1>
                <div className="board-row">
                {this.initializeSquare()}
                {this.initializeSquare()}
                {this.initializeSquare()}
                </div>
                <div className="board-row">
                {this.initializeSquare()}
                {this.initializeSquare()}
                {this.initializeSquare()}
                </div>
                <div className="board-row">
                {this.initializeSquare()}
                {this.initializeSquare()}
                {this.initializeSquare()}
                </div>
            </div>
        )
    }
}

export default Board;