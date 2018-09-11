import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card/Card';

const Total = ({ total }) => (
  <Card>
    <article>
      <span>Total</span>
      <span>{ total }</span>
    </article>
  </Card>
);

Total.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Total;
