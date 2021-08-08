import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.btn01 =this.btn01.bind(this);
    this.btn02 =this.btn02.bind(this);
    this.btn03 =this.btn03.bind(this);

    this.state = {
      clique1: 0,
      clique2: 0,
      clique3: 0,
    }
  };

  btn01 () {
    this.setState((estadoAnterior, _props) => ({
      clique1: estadoAnterior.clique1 + 1
    }), (() => console.log(this.changeBackgroundBtn(this.state.clique1))));
  }; //Esse segundo parâmetro é passado uma callback que vai ser executada assim que o estado for atualizado pela setState.

  btn02 () {
    this.setState((estadoAnterior, _props) => ({
      clique2: estadoAnterior.clique2 + 1
    }))
  };

  btn03 () {
    this.setState((estadoAnterior, _props) => ({
      clique3: estadoAnterior.clique3 + 1
    }))
  };

  changeBackgroundBtn(num) {
    return num % 2 === 0 ? 'green' : 'white'; 
  }

  render() {
    const { clique1, clique2, clique3 } = this.state;

    return (
      <div className="App"> 
        <button 
          onClick={this.btn01}
          style={{ backgroundColor: this.changeBackgroundBtn(clique1) }}
        >
          { clique1 }
        </button>
        <button 
          onClick={this.btn02}
          style={{ backgroundColor: this.changeBackgroundBtn(clique2) }}
        >
          { clique2 }
        </button>
        <button 
          onClick={this.btn03}
          style={{ backgroundColor: this.changeBackgroundBtn(clique3) }}
        >
          { clique3 }
        </button>
      </div>
    );
  }
}

export default App;
