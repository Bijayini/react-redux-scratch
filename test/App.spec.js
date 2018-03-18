import React from 'react';
import App from '../src/components/App'

describe('App', () => {
    const wrapper = shallow(<App />);

    it('should have a container', () => {
        expect(wrapper.find('.container')).to.have.length(1);
    });
});