import React, { Component } from 'react'

class Square extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEmpty: props.stats ? false : true,
        }
    }

    render() {

        return (
            <button onClick={() => this.props.onClickHandler(this.props.stats.id)} 
                className={`square ${this.props.stats && this.props.stats.selected ? "border-selected" : "border-normal"}`}>
                <div className="content-container">
                    <div className="content-top">{this.state.isEmpty ? "" : this.props.stats.top}</div>
                    <div className="content-middle">
                        <div className="content-left">{this.state.isEmpty ? "" : this.props.stats.left}</div>
                        <div className="content-right">{this.state.isEmpty ? "" : this.props.stats.right}</div>
                    </div>
                    <div className="content-bottom">{this.state.isEmpty ? "" : this.props.stats.bottom}</div>
                </div>
            </button>
        )
    }
}

export default Square;