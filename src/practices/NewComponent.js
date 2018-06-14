import React, { Component } from "react";

const wrapWithLoadData = (wrappedComponent, name) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = { data: null };
    }
    componentWillMount() {
      // let data = localStorage.getItem(name);
      // this.setState({ data });
      fetch("/data").then(res => {
        this.setState(res.json());
      });
    }
    render() {
      return <wrappedComponent data={this.state.data} />;
    }
  }
  return NewComponent;
};
class InputWithUserName extends Component {
  render() {
    return <input value={this.props.data} />;
  }
}
InputWithUserName = wrappedComponent(InputWithUserName, "name");
