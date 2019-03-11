import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders router', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Router).length).toEqual(1);
});
