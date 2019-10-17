import React, { Component } from 'react';

class ErrorPage extends Component {
  render() {
    const { errMsg } = this.props;
    return (
      <>
        <strong>
          Whoops! Sorry, but something went wrong...{' '}
          <span role="img" aria-label="awkward face">
            😕
          </span>
          <br />
          <br />
          {errMsg}
        </strong>
      </>
    );
  }
}

export default ErrorPage;
