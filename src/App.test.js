import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('displays touched numbers in the screen', () => {
  const wrapper = shallow(<App />);

  wrapper.find('[data-test="number-1"]').simulate('click');
  wrapper.find('[data-test="number-0"]').simulate('click');
  wrapper.find('[data-test="number-2"]').simulate('click');
  wrapper.find('[data-test="number-3"]').simulate('click');

  expect(wrapper.find('[data-test="display"]').text()).toBe('1023');
});

it('displays decimal points correctly ', () => {
  const wrapper = shallow(<App />);

  wrapper.find('[data-test="."]').simulate('click');
  wrapper.find('[data-test="number-2"]').simulate('click');
  wrapper.find('[data-test="."]').simulate('click');
  wrapper.find('[data-test="number-3"]').simulate('click');

  expect(wrapper.find('[data-test="display"]').text()).toBe('0.23');
});
