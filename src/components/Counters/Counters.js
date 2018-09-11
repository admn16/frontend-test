import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import Counter from 'components/Counter/Counter';

const StyledCounters = styled(Card)`
  margin: 10px 0 !important;
`;

const Counters = ({
  counters,
  onDelete,
  onDecrement,
  onIncrement,
}) => (
  <StyledCounters>
    <article>
      { counters.map(({ id, title, count }) => (
        <Counter
          key={id}
          title={title}
          count={count}
          onIncrement={onIncrement(id)}
          onDelete={onDelete(id)}
          onDecrement={onDecrement(id)}
        />
      )) }
    </article>
  </StyledCounters>
);

Counters.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counters;
