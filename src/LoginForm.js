'use strict';

import React from 'react';

class LoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const userName = this.refs.username.value;
    if (!userName) return this.props.onError();
    this.props.onSuccess();
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input name="username" ref="username"/>
        <input name="password" />
        <button type="submit">send</button>
      </form>
    );
  }
}

export default LoginForm;
