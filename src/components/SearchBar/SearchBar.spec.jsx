import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('displays correctly', () => {
    const wrapper = shallow(<SearchBar onSearchUpdate={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
