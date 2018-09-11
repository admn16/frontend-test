import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Card from 'components/Card/Card';

const CounterForm = ({ onChange, onSubmit, text }) => (
  <Card>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={text} />
      <button type="submit">+</button>
    </form>
  </Card>
);

CounterForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string,
};

CounterForm.defaultProps = {
  text: '',
};

export default CounterForm;
