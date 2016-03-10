'use strict';

jest.unmock('../src/LoginForm');

import LoginForm from '../src/LoginForm';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';


describe('Verify form fields', () => {
  it ('check exist field username', () => {
    const loginForm = TestUtils.renderIntoDocument(
      <LoginForm />
    );

    const loginFormDOM = ReactDOM.findDOMNode(loginForm);
    const fieldUsername = loginFormDOM.querySelector('input[name="username"]');

    expect(fieldUsername).not.toBeNull();
  });

  it ('check exist field password', () => {
    const loginForm = TestUtils.renderIntoDocument(
      <LoginForm />
    );

    const loginFormDOM = ReactDOM.findDOMNode(loginForm);
    const fieldPassword = loginFormDOM.querySelector('input[name="password"]');

    expect(fieldPassword).not.toBeNull();

  });

  // it('changes the text after click', () => {
  //   // Render a checkbox with label in the document
  //   const checkbox = TestUtils.renderIntoDocument(
  //     <CheckboxWithLabel labelOn="On" labelOff="Off" />
  //   );
  //
  //   const checkboxNode = ReactDOM.findDOMNode(checkbox);
  //
  //   // Verify that it's Off by default
  //   expect(checkboxNode.textContent).toEqual('Off');
  //
  //   // Simulate a click and verify that it is now On
  //   TestUtils.Simulate.change(
  //     TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
  //   );
  //   expect(checkboxNode.textContent).toEqual('On');
  // });
});
