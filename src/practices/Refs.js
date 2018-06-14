import React, { Component } from "react";
class AutoFocus extends Component {
  componentDidMount() {
    this.input.focus();
  }
  render() {
    return (
      <div>
        <input
          ref={input => {
            this.input = input;
          }}
        />
        <Pheight />
        <Post />
      </div>
    );
  }
}
const Post = props => {
  const node = {};
  const consoleMsg = () => {
    console.log(node.p.clientHeight);
  };
  return (
    <p
      ref={p => {
        node.p = p;
      }}
      onClick={consoleMsg}
    >
      ffffffff
    </p>
  );
};
class Pheight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pheight: 0
    };
  }
  componentDidMount() {}
  handleClick() {
    this.setState({
      Pheight: this.p.clientHeight
    });
    // setState 异步执行,打印的值依然是之前的值 
    console.log(this.p.clientHeight);
  }
  render() {
    return (
      <p ref={p => (this.p = p)} onClick={this.handleClick.bind(this)}>
        get ref height
      </p>
    );
  }
}
export default AutoFocus;
