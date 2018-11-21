import React from 'react';
import App from '../App';

describe('App Component', () => {
  it('should render container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.container').length).toBe(1);
  });
});
