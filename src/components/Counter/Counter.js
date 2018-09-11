import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCounter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;

  &:hover {
    background-color: #f7fcfd;
  }
`;

const Title = styled.span`
  color: #312a2a;
  flex-grow: 10;
  font-size: 15px;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Count = styled.span`
  font-size: 14px;
  text-align: center;
  width: 40px;
`;

const Delete = styled.button`
  background: none;
  border: none;
  color: #355869;
  cursor: pointer;
  font-size: 10px;
  margin: 0 10px 0 5px;
  outline: none;
  
  &:hover {
    color: #d01204;
  }
`;

const Increment = styled(Delete)`
  color: #d01204;
  font-size: 12px;
  margin: 0;
  
  &:hover {
    color: #ff1100;
  }
`;

const Decrement = styled(Increment)`
  color: #4791a0;

  &:hover {
    color: #4dcbe4;
  }
`;

const Counter = ({
  count,
  title,
  onDelete,
  onIncrement,
  onDecrement,
}) => (
  <StyledCounter>
    <Delete type="button" onClick={onDelete}>
      <i className="fas fa-trash-alt" />
    </Delete>

    <Title>{ title }</Title>

    <Increment type="button" onClick={onIncrement}>
      <i className="fas fa-plus" />
    </Increment>

    <Count>{ count }</Count>

    <Decrement type="button" onClick={onDecrement}>
      <i className="fas fa-minus" />
    </Decrement>
  </StyledCounter>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
