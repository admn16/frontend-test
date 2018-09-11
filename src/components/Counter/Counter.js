import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Counter = ({
  count,
  title,
  onDelete,
  onIncrement,
  onDecrement,
}) => (
  <div>
    <button type="button" onClick={onDelete}>
      [ x ]
    </button>
    <span>{ title }</span>

    <button type="button" onClick={onIncrement}>+</button>
    <span>{ count }</span>
    <button type="button" onClick={onDecrement}>-</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
