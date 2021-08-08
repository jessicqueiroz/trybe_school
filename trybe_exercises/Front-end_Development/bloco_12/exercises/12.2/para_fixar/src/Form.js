import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { estadoFavorito, idade, vaiComparecer } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label htmlFor="name">
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!<br />
              <textarea name="estadoFavorito" value={estadoFavorito} onChange={this.handleChange} id="name" />
          </label>
          <br />
          <label htmlFor="number">
            Input 01 - Tipo number<br />
            <input
              id="number"
              type="number"
              name="idade"
              value={idade}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="checkbox-input">
            Input 02 - Tipo checkbox<br />
            <input
              id="checkbox-input"
              type="checkbox"
              name="vaiComparecer"
              value={vaiComparecer}
              onChange={this.handleChange}
            />
          </label>
          <p>{idade}</p>
        </form>
      </div>
    );
  }
}

export default Form;