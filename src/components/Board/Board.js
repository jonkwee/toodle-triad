import React, { Component } from 'react'
import Square from '../Square/Square';

class Board extends Component {
    constructor() {
        super();
        this.squares = [0,1,2,3,4,5,6,7,8];
    }


    renderSquare() {
        const data = {
            top: 3,
            left: 2,
            right: 2,
            bottom: 3
        }
        return (
            <Square stats={data}/>
        )
    }

    render() {
        return (
            <div className="board">
                <h1 className="board-title">Game board</h1>
                <div className="board-row">
                {this.renderSquare()}
                {this.renderSquare()}
                {this.renderSquare()}
                </div>
                <div className="board-row">
                {this.renderSquare()}
                {this.renderSquare()}
                {this.renderSquare()}
                </div>
                <div className="board-row">
                {this.renderSquare()}
                {this.renderSquare()}
                {this.renderSquare()}
                </div>
            </div>
        )
    }
}

export default Board;