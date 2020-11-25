import React, { Component } from 'react'

import axios from 'axios'

export default class LikeButton extends Component {

    // ES UN OBJETO GLOBAL
    state = {
        index: 0,
        nombres: [
            "Mike",
            "Roberto"
        ],
        dogs: []
    }

    componentDidMount(){
        axios.get(" https://dog.ceo/api/breeds/image/random/3")
        .then((res) => {
            this.setState({
                dogs: res.data.message
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                  <button onClick={() => {
                      return this.setState(
                          {
                          index: this.state.index + 1
                        })
                    }}> 
                    {this.state.index} Likes
                    </button>              

                    {this.state.nombres.map((elemento) => {
                        return (
                            <p>
                                {elemento}
                            </p>
                        )
                    })}

                    {
                    this.state.dogs.length === 0 ? "Cargando" : this.state.dogs.map(dog => {
                        return (
                            <img src={dog} />
                        )
                    })}

            </div>
        )
    }
}
