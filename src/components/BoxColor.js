import React, { Component } from 'react'

export default class BoxColor extends Component {

    backgroundStyle = (r,g,b) => {
        const rgb = `rgb(${r}, ${g}, ${b})`
        return rgb 
    }

    convertRGBtoHexa = (r,g,b) => {
        const hexOne = r.toString(16)
        const hexTwo = g.toString(16)
        const hexThree = b.toString(16)

        const hexOneFinal = hexOne.length === 1 ? `0${hexOne}` : `${hexOne}`
        const hexTwoFinal = hexTwo.length === 1 ? `0${hexTwo}` : `${hexTwo}`
        const hexThreeFinal = hexThree.length === 1 ? `0${hexThree}` : `${hexThree}`

        return `#${hexOneFinal}${hexTwoFinal}${hexThreeFinal}`
    }


    render() {
        return (
            <>
                <section style={
                    {
                        backgroundColor: `
                        ${this.backgroundStyle(
                            this.props.r,
                            this.props.g,
                            this.props.b)}`
                    }}>
                    <p>{`rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}</p>
                    <p>{this.convertRGBtoHexa(this.props.r, this.props.g, this.props.b)}</p>
                </section>                
            </>
        )
    }
}
