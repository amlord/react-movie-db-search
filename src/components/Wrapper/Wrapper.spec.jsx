import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from './Wrapper';

describe('Wrapper', () => {
  it('displays correctly', () => {
    const wrapper = shallow(<Wrapper>Wrapped Content</Wrapper>);
    expect(wrapper).toMatchSnapshot();
  });
});
