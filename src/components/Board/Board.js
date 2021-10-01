import React, { Component } from 'react'
import Square from '../Square/Square';

class Board extends Component {
    constructor() {
        super();
        this.squares = [0,1,2,3,4,5,6,7,8];
    }


    renderSquare(i) {
        return (
            <Square
                value={this.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        )
    }

    render() {
        return (
            <div className="board">
                <h1 className="board-title">Game board</h1>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board;