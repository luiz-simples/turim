'use strict';

import React from 'react';

export default class LoginForm extends React.Component {
  handleSubmit() {
    console.log('----------------------');
    this.props.onSuccess();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" />
        <input name="password" />
        <button type="submit">send</button>
      </form>
    );
  }
}
