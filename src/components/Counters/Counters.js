import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Card from 'components/Card/Card';
import Counter from 'components/Counter/Counter';

const blinking = keyframes`
  50% {
    opacity: 0;
  }
`;

const StyledCounters = styled(Card)`
  margin: 10px 0 !important;
  min-height: 100px;
`;

const NoDataText = styled.span`
  font-size: 12px;
  animation: ${blinking} 1s linear infinite;
`;

const Counters = ({
  counters,
  onDelete,
  onDecrement,
  onIncrement,
}) => (
  <StyledCounters>
    <article>
      {
        counters.length === 0 && (
          <NoDataText>
            <i className="far fa-hand-point-up" />
            &nbsp;Add something...
          </NoDataText>
        )
      }
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
