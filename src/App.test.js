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

it('adds 2 numbers and displays the result when the equals button is clicked', () => {
  const wrapper = shallow(<App />);

  wrapper.find('[data-test="number-0"]').simulate('click');
  wrapper.find('[data-test="."]').simulate('click');
  wrapper.find('[data-test="number-2"]').simulate('click');
  wrapper.find('[data-test="+"]').simulate('click');
  wrapper.find('[data-test="number-8"]').simulate('click');
  wrapper.find('[data-test="="]').simulate('click');
  expect(wrapper.find('[data-test="display"]').text()).toBe('8.2');
});

it('subtracts 1 number from another and displays the result when the equals button is clicked', () => {
  const wrapper = shallow(<App />);

  wrapper.find('[data-test="number-4"]').simulate('click');
  wrapper.find('[data-test="-"]').simulate('click');
  wrapper.find('[data-test="number-9"]').simulate('click');
  wrapper.find('[data-test="="]').simulate('click');
  expect(wrapper.find('[data-test="display"]').text()).toBe('-5');
});

it('multiplies 2 numbers and displays the result when the equals button is clicked', () => {
  const wrapper = shallow(<App />);

  wrapper.find('[data-test="number-1"]').simulate('click');
  wrapper.find('[data-test="."]').simulate('click');
  wrapper.find('[data-test="number-2"]').simulate('click');
  wrapper.find('[data-test="x"]').simulate('click');
  wrapper.find('[data-test="number-3"]').simulate('click');
  wrapper.find('[data-test="="]').simulate('click');
  expect(wrapper.find('[data-test="display"]').text()).toBe('3.6');
});

it('divides 2 numbers and displays the result when the equals button is clicked', () => {
  const wrapper = shallow(<App />);

  wrapper.find('[data-test="number-8"]').simulate('click');
  wrapper.find('[data-test="/"]').simulate('click');
  wrapper.find('[data-test="number-3"]').simulate('click');
  wrapper.find('[data-test="="]').simulate('click');
  expect(wrapper.find('[data-test="display"]').text()).toBe('2.66666667');
});

it('clears the screen if the C button is clicked', () => {
  const wrapper = shallow(<App />);

  wrapper.find('[data-test="number-1"]').simulate('click');
  wrapper.find('[data-test="."]').simulate('click');
  wrapper.find('[data-test="number-3"]').simulate('click');
  expect(wrapper.find('[data-test="display"]').text()).toBe('1.3');

  wrapper.find('[data-test="clear"]').simulate('click');
  expect(wrapper.find('[data-test="display"]').text()).toBe('0');
});
