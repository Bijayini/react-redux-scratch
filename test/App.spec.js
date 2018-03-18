import React from 'react';
import App from '../src/components/App'

describe('App Component', ()=>{
    it('should render container', ()=>{
        const wrapper = shallow(<App />);
        expect(wrapper.find('.container')).to.have.length(1);
    });
});