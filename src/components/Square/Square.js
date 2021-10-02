import React, { Component } from 'react'

class Square extends Component {
    constructor() {
        super()
        this.state = {
            selected: false
        }
    }

    squareClicked() {
        this.setState(prevState => ({
            selected: !prevState.selected 
        }), console.log("Clicked"))
    }

    render() {
        return (
            <button onClick={() => this.squareClicked()} className={this.state.selected ? "square border-selected" : "square border-normal"}>
                <div className="content-container">
                    <div className="content-top">{this.props.stats.top}</div>
                    <div className="content-middle">
                        <div className="content-left">{this.props.stats.left}</div>
                        <div className="content-right">{this.props.stats.right}</div>
                    </div>
                    <div className="content-bottom">{this.props.stats.bottom}</div>
                </div>
            </button>
        )
    }
}

export default Square;