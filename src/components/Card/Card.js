import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: #fff;
  border-width: 1px 1px 1px 1px;
  border-color: rgba(90, 122, 190, 0.14);
  border-radius: 8px;
  border-style: solid;
  box-shadow: 0px 3px 0px 0px rgba(90, 122, 190, 0.2);
  padding: 10px;

  &:hover {
    border-style: solid;
    box-shadow: 0px 10px 20px 0px rgba(90, 122, 190, 0.15);
  }
`;

const Card = ({ children }) => (
  <StyledCard>{ children }</StyledCard>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
