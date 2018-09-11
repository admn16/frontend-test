import React from 'react';
import renderer from 'react-test-renderer';
import { CounterApp } from 'containers/CounterApp/CounterApp';

describe('<CounterApp/>', () => {
  const mockFn = jest.fn();
  const props = {
    getCounters: mockFn,
    incrementCounter: mockFn,
    decrementCounter: mockFn,
    deleteCounter: mockFn,
    addCounter: mockFn,
    updateText: mockFn,

    counters: [{ count: 1, title: 'test123', id: '123asd' }],
    text: 'test 123123',
  };

  test('renders correctly', () => {
    const tree = renderer
      .create(<CounterApp {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
