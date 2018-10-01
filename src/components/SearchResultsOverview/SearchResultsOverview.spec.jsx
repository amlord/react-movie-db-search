import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsOverview from './SearchResultsOverview';

describe('SearchResultsOverview', () => {
  it('displays correctly', () => {
    const wrapper = shallow(<SearchResultsOverview />);
    expect(wrapper).toMatchSnapshot();
  });
});
