import React, { Component } from 'react'

class IdCard extends Component {
    render() {
        console.log(this.props)
        console.log(this.props.birth)
        return (
            <div>
                <img src={this.props.picture} />
                <p>First Name: {this.props.firstName}</p>
                <p>Last Name: {this.props.lastName}</p>
                <p>Gender: {this.props.gender}</p>
                <p>Height: {this.props.height}</p>
                <p>Birth: {this.props.birth}</p>
            </div>
        )
    }
}


export default IdCard