import React from 'react';
import renderer from 'react-test-renderer';
import Card from 'components/Card/Card';

describe('<Card/>', () => {
  const props = {
    children: (
      <p>test</p>
    ),
  };

  test('renders correctly', () => {
    const tree = renderer
      .create(<Card {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
