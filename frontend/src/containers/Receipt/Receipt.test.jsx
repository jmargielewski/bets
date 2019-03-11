import React from 'react';
import { shallow } from 'enzyme';
import { Receipt } from './Receipt';

describe('<Recipt/>', () => {
  it('should correctly receive sum', () => {
    const stakes = { darya: '3', johanna: '3' };
    const wrapper = shallow(<Receipt stakes={stakes} />);
    expect(wrapper.find('.sum').text()).toEqual('6');
  });
});
