import React, { Component } from "react";
class COntextIndex extends Component {
  static childrenContextProps = {
    themeColor: PropTypes.sting
  };
  constructor() {
    super();
    this.state = { themeColor: "red" };
  }
  getChildContext() {
    return { themeColor: this.state.themeColor };
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
class ContextTitle extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  };
  render() {
    return (
      <h1 style={{ color: this.context.themeColor }}>this is context title</h1>
    );
  }
}
