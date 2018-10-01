import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from './SearchResult';

describe('SearchResult', () => {
  it('displays correctly', () => {
    const wrapper = shallow(<SearchResult />);
    expect(wrapper).toMatchSnapshot();
  });
});
