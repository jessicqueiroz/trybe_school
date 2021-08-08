import React from 'react';
import PropTypes from 'prop-types';

class InputList2 extends React.Component {
  render() {
    const {
      storyLine,
      handleChange,
      rating,
      genre,
    } = this.props;

    return (
      <div>
        <label htmlFor="input-storyLine-add" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="input-storyLine-add"
            name="storyLine"
            value={ storyLine }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="input-rating-add" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="input-rating-add"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="input-genre-add" data-testid="genre-input-label">
          Gênero
          <select
            id="input-genre-add"
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

InputList2.propTypes = {
  handleChange: PropTypes.func.isRequired,
  storyLine: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default InputList2;
