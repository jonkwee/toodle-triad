import React, { Component } from "react"
import Square from '../Square/Square';

class Hand extends Component {
    
    constructor() {
        super()
    }


    renderSquare() {
        const data = {
            top: 4,
            left: 3,
            right: 3,
            bottom: 5
        }
        return (
            <Square stats={data}/>
        )
    }


    render() {

        return (
            <div className="hand">
                <h1 className="hand-title">Hand</h1>
                <div className="hand-content">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
            </div>

        )
    }
}

export default Hand;