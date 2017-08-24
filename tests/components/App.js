import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../app/components/app';

describe('App Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('should exist', () => {
        expect(wrapper).to.exist;
    });

    it('should have one heading', () => {
        expect(wrapper.find('.title').type()).to.equal('h1');
    });
});
