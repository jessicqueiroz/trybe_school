//UserName.js (um componente que criamos)
import React, { Component } from 'react'

class UserName extends Component {
    render() {
        const name = this.props.name
        return (
            //num arquivo css podemos estilizar atraves da classe .name ao importá-lo
        	<span className="name">{name}</span>
        )
    }
}

export default UserName