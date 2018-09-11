import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card';

const StyledTotal = styled(Card)`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  text-transform: uppercase;
  padding: 10px 0;
  margin: 0;
`;

const TotalText = styled.span`
  font-weight: 700;
`;

const Total = ({ total }) => (
  <StyledTotal>
    <Text>
      Total Sum:&nbsp;
      <TotalText>{ total }</TotalText>
    </Text>
  </StyledTotal>
);

Total.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Total;
