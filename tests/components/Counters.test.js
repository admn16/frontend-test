import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Counters from 'components/Counters/Counters';

describe('<Counters/>', () => {
  const mockFn = () => jest.fn();

  const props = {
    counters: [{ count: 1, title: 'test123', id: '123asd' }],
    onDelete: mockFn,
    onDecrement: mockFn,
    onIncrement: mockFn,
  };

  test('renders 1 <Counter/>', () => {
    const tree = shallow(<Counters {...props} />);

    expect(tree.find('Counter').length).toEqual(1);
  });

  test('renders correctly', () => {
    const tree = renderer
      .create(<Counters {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
