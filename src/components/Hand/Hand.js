import React, { Component } from "react"
import Square from '../Square/Square';

class Hand extends Component {

    constructor() {
        super()

        const listOfCardsInHand = []
        for (let i = 0; i < 5; i++) {
            listOfCardsInHand.push(this.generateRandomCardData(i))
        }

        this.state = {
            cardSelectedIndex: -1,
            listOfCardsInHand: listOfCardsInHand
        }

    }

    cardSelectedFromHand = (indexId) => {
        if (indexId !== this.state.cardSelectedIndex) {
            this.setState(prevState => ({
                cardSelectedIndex: indexId,
                listOfCardsInHand: prevState.listOfCardsInHand.map((c, i) => {
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

    generateRandomCardData = (index) => {
        return {
            id: index,
            selected: false,
            top: Math.floor(Math.random() * 9) + 1,
            left: Math.floor(Math.random() * 9) + 1,
            right: Math.floor(Math.random() * 9) + 1,
            bottom: Math.floor(Math.random() * 9) + 1
        }
    }

    renderSquare(index) {
        return (
            <Square key={index} stats={this.state.listOfCardsInHand[index]} onClickHandler={(index) => this.cardSelectedFromHand(index)} />
        )
    }


    render() {

        return (
            <div className="hand">
                <h1 className="hand-title">Hand</h1>
                <div className="hand-content">
                    {this.state.listOfCardsInHand.map((_, i) => this.renderSquare(i))}
                </div>
            </div>

        )
    }
}

export default Hand;