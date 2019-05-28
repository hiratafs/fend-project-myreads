import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BotaoRetorna extends Component {
    render () {
        return(

            <Link to='/' className="close-search" >Close</Link>

        )
    }
}

export default BotaoRetorna