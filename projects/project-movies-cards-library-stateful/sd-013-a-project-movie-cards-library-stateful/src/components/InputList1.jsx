import React from 'react';
import Proptypes from 'prop-types';

class InputList1 extends React.Component {
  render() {
    const {
      title,
      handleChange,
      subtitle,
      imagePath,
    } = this.props;

    return (
      <div>
        <label htmlFor="input-title-add" data-testid="title-input-label">
          Título
          <input
            id="input-title-add"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="input-subtitle-add" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="input-subtitle-add"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="input-image-add" data-testid="image-input-label">
          Imagem
          <input
            id="input-image-add"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

InputList1.propTypes = {
  title: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  subtitle: Proptypes.string.isRequired,
  imagePath: Proptypes.string.isRequired,
};

export default InputList1;
