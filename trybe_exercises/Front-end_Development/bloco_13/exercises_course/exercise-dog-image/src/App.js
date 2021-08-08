import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: '',
      name: '',
      array: [],
    };
    this.fetchDogs = this.fetchDogs.bind(this);
    this.saveName = this.saveName.bind(this);
  }

  componentDidMount() {
    this.fetchDogs();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogs.message.includes('terrier')) {
      return false;
    } return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { dogs } = this.state;
    if (prevState.dogs !== dogs) {
      const dogBreed = dogs.message.split('/')[4];
      alert(dogBreed);
    }
  }

  saveName() {
    const {
      dogs: { message },
      name,
      array,
    } = this.state;
    const dogData = { message, name };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ name: '' });
    localStorage.setItem('namedDogURL', JSON.stringify(newArray));
  }

  fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => this.setState({ dogs: data }));
  }

  render() {
    const { dogs, name } = this.state;
    if (dogs === '') {
      return 'loading...';
    }
    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.fetchDogs }>N3W D0G</button>
        <div>
          <img src={ dogs.message } alt="Random dog" />
          <br />
          <label htmlFor="btn-name">
            Dê um nome ao doguinho
            <input
              type="text"
              id="btn-name"
              onChange={ (e) => this.setState({ name: e.target.value }) }
              value={ name }
            />
          </label>
          <button type="button" onClick={ this.saveName }>Salvar nome</button>
        </div>
      </div>
    );
  }
}

export default App;
