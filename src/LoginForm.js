'use strict';

import React from 'react';

export default class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <input name="username" />
        <input name="password" />
        <input type="buttom" name="buttom" />
      </form>
    );
  }
}
