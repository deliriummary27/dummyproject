import React, { Component } from 'react'
import axios from 'axios'
import Appp from './Appp'

export default class App2 extends Component {

    state = {
        things: []
    }


    componentDidMount() {
    fetch('/api/')
      .then(res => {
        return this.setState({
          things: res.data
        })
      })
    }


    render() {

        const thing = this.state.things.map(item => {
            return(
              <div>
                <h1 key={item.id}>{item.title}</h1>
                <img key={item.id} alt='w' src={item.image}></img>
              </div>
            )
          }) 
        return (
            <div>
                {thing}
                <Appp />
            </div>
        )
    }
}

