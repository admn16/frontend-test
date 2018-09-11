import React from 'react';
import renderer from 'react-test-renderer';
import Counters from 'components/Counters/Counters';

describe('<Counters/>', () => {
  const mockFn = () => jest.fn();

  const props = {
    counters: [{ count: 1, title: 'test123', id: '123asd' }],
    onDelete: mockFn,
    onDecrement: mockFn,
    onIncrement: mockFn,
  };

  test('renders correctly', () => {
    const tree = renderer
      .create(<Counters {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
