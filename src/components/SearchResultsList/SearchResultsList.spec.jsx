import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsList from './SearchResultsList';

describe('SearchResultsList', () => {
  it('displays correctly', () => {
    const wrapper = shallow(<SearchResultsList results={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
