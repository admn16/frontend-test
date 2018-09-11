import React from 'react';
import renderer from 'react-test-renderer';
import CounterForm from 'components/CounterForm/CounterForm';

describe('<CounterForm/>', () => {
  const props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    text: 'Title',
  };

  test('renders correctly', () => {
    const tree = renderer
      .create(<CounterForm {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
