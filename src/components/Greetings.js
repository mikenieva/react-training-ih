import React, { Component } from 'react'

export default class Greetings extends Component {

    render() {
        return (
            <div>
                {
                    this.props.lang ===  "de" ? 
                        `Hallo ${this.props.children}` 
                    : 
                        `Bonjour ${this.props.children}`
                }
            </div>
        )
    }
}
