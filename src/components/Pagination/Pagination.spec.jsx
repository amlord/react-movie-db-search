import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('displays correctly', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper).toMatchSnapshot();
  });
});
