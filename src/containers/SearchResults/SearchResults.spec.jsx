import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
  it('displays correctly', () => {
    const wrapper = shallow(<SearchResults results={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
