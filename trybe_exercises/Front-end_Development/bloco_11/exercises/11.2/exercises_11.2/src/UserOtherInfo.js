//UserOtherInfo.js (um componente que criamos)
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class UserOtherInfo extends Component {
    render() {
        const { email, id } = this.props //obj destr. dos objetos joao e maria
        
        return (
        <span>{email} {id}</span>
        )
    }
}

export default UserOtherInfo