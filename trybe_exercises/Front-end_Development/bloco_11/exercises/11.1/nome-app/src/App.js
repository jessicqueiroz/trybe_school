import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const compromissos = ['acordar', 'beber água', 'tomar café', 'tomar banho', 'ir para o trabalho'];

const array = compromissos.map(Task);

class App extends React.Component {
  render() {
    return (
    array
    );
  }
}

export default App;
