import React, { Component } from "react";
import CommentInput from "./components/CommentInput";
import CommentList from "./components/CommentList";
import TodoApp from "./components/TodoApp";
import PercentageApp from "./practices/PercentageShower";
import Timer from "./practices/Timer";
import AutoFocus from "./practices/Refs";
class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      list: [1, 2, 3, 4]
    };
  }
  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) return alert("请输入用户名");
    if (!comment.content) return alert("请输入评论内容");
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Timer />
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
        <TodoApp />
        <PercentageApp />
        <AutoFocus />
        {/* <BlackBorderContainer>
          {this.state.list.map((ele, i) => <div> div + {ele} </div>)}
        </BlackBorderContainer> */}
      </div>
    );
  }
}

export default App;
