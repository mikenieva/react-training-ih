import React, { Component } from 'react'

export default class Random extends Component {

    getRandomNumber(min, max){
        return Math.round(Math.random() * (max - min) + min)
    }

    render() {
        return (
            <div>
                {
                    ` 
                    Random value between ${this.props.min} and ${this.props.max} => 
                    ${this.getRandomNumber(this.props.min, this.props.max)}
                    `
                }

            </div>
        )
    }
}
