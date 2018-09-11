import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Total from 'components/Total/Total';

describe('<Total/>', () => {
  const props = {
    total: 100000,
  };

  test('renders correct total', () => {
    const tree = shallow(<Total {...props} />);

    expect(tree.find('Total__TotalText').html().includes(100000)).toBe(true);
  });

  test('renders correctly', () => {
    const tree = renderer
      .create(<Total {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
