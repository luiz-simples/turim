'use strict';

jest.unmock('../src/LoginForm');

import LoginForm from '../src/LoginForm';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Verify form fields', () => {
  let loginFormDOM;

  beforeEach(() => {
    const loginForm = TestUtils.renderIntoDocument(
      <LoginForm />
    );

    loginFormDOM = ReactDOM.findDOMNode(loginForm);
  });

  it ('check exist field username', () => {
    const fieldUsername = loginFormDOM.querySelector('input[name="username"]');
    expect(fieldUsername).not.toBeNull();
  });

  it ('check exist field password', () => {
    const fieldPassword = loginFormDOM.querySelector('input[name="password"]');
    expect(fieldPassword).not.toBeNull();
  });

  it ('check exist submit buttom', () => {
    const buttomSubmit = loginFormDOM.querySelector('input[name="buttom"]');
    expect(buttomSubmit).not.toBeNull();
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
