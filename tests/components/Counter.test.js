import React from 'react';
import renderer from 'react-test-renderer';
import Counter from 'components/Counter/Counter';

describe('<Counter/>', () => {
  const mockFn = jest.fn();
  const props = {
    count: 0,
    title: 'Title',
    onDelete: mockFn,
    onIncrement: mockFn,
    onDecrement: mockFn,
  };

  test('renders correctly', () => {
    const tree = renderer
      .create(<Counter {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
