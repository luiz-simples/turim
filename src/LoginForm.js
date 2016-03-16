'use strict';

import React from 'react';

class LoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSuccess();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input name="username" />
        <input name="password" />
        <button type="submit">send</button>
      </form>
    );
  }
}

export default LoginForm;
