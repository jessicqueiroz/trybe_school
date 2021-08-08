import React, { Component } from 'react';

class StrictAcess extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h2>StrictAcess</h2>
        <p> 
          {
            user.username === 'joao' && user.password === '1234' ?
            <p>Welcome {user.username}!</p> :
            alert(`Acess denied`)
          }
        </p>
      </div>
    );
  }
}

export default StrictAcess;
