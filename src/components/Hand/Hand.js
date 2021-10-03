import React, { Component } from "react"
import Square from '../Square/Square';

class Hand extends Component {

    constructor() {
        super()

        this.state = {
            cardSelectedIndex: -1,
        }

    }

    cardSelectedFromHand = (indexId) => {
        if (indexId !== this.state.cardSelectedIndex) {
            this.setState((_, props) => ({
                cardSelectedIndex: indexId,
                listOfCardsInHand: props.handOfCards.map((c, i) => {
                    if (c.id === indexId) {
                        c.selected = true
                    } else {
                        c.selected = false
                    }
                    return c;
                })
            }))
        }
    }

    renderSquare(index) {
        return (
            <Square key={index} stats={this.props.handOfCards[index]} onClickHandler={(index) => this.cardSelectedFromHand(index)} />
        )
    }


    render() {

        return (
            <div className="hand">
                <h1 className="hand-title">Hand</h1>
                <div className="hand-content">
                    {this.props.handOfCards.map((_, i) => this.renderSquare(i))}
                </div>
            </div>

        )
    }
}

export default Hand;