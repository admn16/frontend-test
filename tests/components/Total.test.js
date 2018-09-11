import React from 'react';
import renderer from 'react-test-renderer';
import Total from 'components/Total/Total';

describe('<Total/>', () => {
  const props = {
    total: 10,
  };

  test('renders correctly', () => {
    const tree = renderer
      .create(<Total {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
