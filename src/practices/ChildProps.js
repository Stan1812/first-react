import React, { Component } from "react";
class BlackBorderContainer extends Component {
  render() {
    return (
      <div>
        {this.props.children.map((ele,i)=> <div> {ele}</div> )}
      </div>
    );
  }
}

export default BlackBorderContainer;
