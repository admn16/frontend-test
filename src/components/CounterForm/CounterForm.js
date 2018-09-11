import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card';

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid gray;
  flex-grow: 1;
  font-size: 14px;
  outline: none;
  padding: 5px;
  transition: border-bottom-color 1s;

  &:focus {
    border-bottom-color: #d01204;
  }
`;

const Button = styled.button`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  padding: 0;
  text-align: center;
  font-size: 12px;
  background: #d01204;
  color: white;
  line-height: 0px;
  vertical-align: middle;
  outline: none;
  transition: box-shadow 0.3s;


  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const CounterForm = ({ onChange, onSubmit, text }) => (
  <Card>
    <Form onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        value={text}
        placeholder="Add new counter"
      />
      <Button type="submit">+</Button>
    </Form>
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
