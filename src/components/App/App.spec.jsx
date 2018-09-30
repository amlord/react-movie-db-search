import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// mock API object responses
jest.mock('api/TheMovieDb', () => (() => ({
  getMovies: () => Promise.resolve({
    results: [],
  }),
})));

describe('App', () => {
  it('displays correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
