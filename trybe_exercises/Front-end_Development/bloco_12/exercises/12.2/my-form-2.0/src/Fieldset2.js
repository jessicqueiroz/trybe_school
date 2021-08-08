import { Component } from 'react';

class Fielset2 extends Component {
  mouseEnter() {
    return alert ('Preencha com cuidado esta informação.');
  }

  render() {
    return (
      <div>
        <fieldset>
          <label>Resumo do Currículo:
            <textarea required type='text' name='curriculum'></textarea>
          </label>
          <label>Cargo:
            <textarea required type='text' name='role' onMouseEnter={() => alert ('Preenche com cuidado esta informação.')}></textarea>
          </label>
          <label>Descrição do Cargo:
            <textarea required type='text' name='description-role'></textarea>
          </label>
        </fieldset>
      </div>
    );
  }
}

export default Fielset2;