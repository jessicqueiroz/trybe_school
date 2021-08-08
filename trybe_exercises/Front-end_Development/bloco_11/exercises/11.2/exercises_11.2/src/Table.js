//table.js (um componente que criamos)
import React, { Component } from 'react'
import UserName from './UserName'
import UserOtherInfo from './UserOtherInfo'

class Table extends Component {
    render() {
        const users = [
            {
                id: 102,
                name: 'joão',
                email: 'joao@gmail.com'
            },
            {
                id: 77,
                name: 'maria',
                email: 'maria@gmail.com'
            },
            {
                id: 79,
                name: 'julia',
                email: 'julia@gmail.com'
            }            
        ]
        
        return (
            users.map((user) => 
            (
        	<div>
                <UserName name={user.name} /><br />
                <UserOtherInfo email={user.email} id={user.id} />
            </div>
            ))
        )
    }
}

export default Table