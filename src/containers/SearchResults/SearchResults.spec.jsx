import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
  it('displays correctly', () => {
    const props = {
      results: [],
      onSearchUpdate: jest.fn(),
    };
    const wrapper = shallow(<SearchResults {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
