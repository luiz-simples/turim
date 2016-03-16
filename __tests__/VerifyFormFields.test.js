'use strict';

jest.unmock('../src/LoginForm');

import LoginForm from '../src/LoginForm';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Verify form fields', () => {
  let loginFormDOM;
  let myMockSuccess;
  let myMockError;

  beforeEach(() => {
    myMockSuccess = jest.genMockFunction();
    myMockError = jest.genMockFunction();

    const loginForm = TestUtils.renderIntoDocument(
      <LoginForm
        onSuccess={myMockSuccess}
        onError={myMockError}
      />
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

  it ('check exist submit button', () => {
    const buttonSubmit = loginFormDOM.querySelector('button');
    expect(buttonSubmit).not.toBeNull();
  });

  it ('check call action on success', () => {
    const fieldUsername = loginFormDOM.querySelector('input[name="username"]');
    fieldUsername.value = 'Novo Valor';
    TestUtils.Simulate.submit(loginFormDOM);
    expect(myMockSuccess).toBeCalled();
  });

  it ('check user name is filled', () => {
    TestUtils.Simulate.submit(loginFormDOM);
    expect(myMockError).toBeCalled();
  });

  it ('check dont call onSuccess when form error', () => {
    TestUtils.Simulate.submit(loginFormDOM);
    expect(myMockSuccess).not.toBeCalled();
  });
});
