import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsItem from './SearchResultsItem';

describe('SearchResultsItem', () => {
  it('displays correctly', () => {
    const wrapper = shallow(<SearchResultsItem title="Movie Name" />);
    expect(wrapper).toMatchSnapshot();
  });
});
