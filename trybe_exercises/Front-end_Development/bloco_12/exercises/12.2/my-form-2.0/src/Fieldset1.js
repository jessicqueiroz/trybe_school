import { Component } from 'react';

class Fieldset1 extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <label>
            Nome:
            <input required maxLength='40' type='text' name='name'></input>
          </label>
          <br />
          <label>
            Email:
            <input required maxLength='50' type='email' name='email'></input>
          </label>
          <br />
          <label>
            CPF:
            <input required maxLength='11' type='text' name='cpf'></input>
          </label>
          <br />
          <label>
            Endereço:
            <input required type='text' name='adress'></input>
          </label>
          <br />
          <label>
            Cidade:
            <input required type='text' name='city'></input>
          </label>
          <br />
          <label>
            Estado:
            <input required type='text' name='state'></input>
          </label>
          <br />
          <label>
            Complemento:
              <input required type='radio' name='house' value='house' />Casa
              <input required type='radio' name='apartment' value='apartment' />Apartamento
          </label>
        </fieldset>
      </div>
    
    );
  }
}

export default Fieldset1;