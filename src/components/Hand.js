import React, { Component } from "react"
import Square from "./Square"

class Hand extends Component {
    
    constructor() {
        super()
    }


    render() {

        return (
            <div className="hand">
                <h1 className="hand-title">Hand</h1>
                <div className="hand-content">
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>

        )
    }
}

export default Hand;