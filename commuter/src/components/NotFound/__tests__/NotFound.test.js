/* eslint-disable */
import React from 'react';
import NotFound from '../index';
import { shallow } from 'enzyme';

describe('NotFound', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot()
  })
})