import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('displays correctly', () => {
    const wrapper = shallow(<Pagination page={3} totalPages={16} />);
    expect(wrapper).toMatchSnapshot();
  });
});
