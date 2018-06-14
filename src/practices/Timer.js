import React, { Component } from "react";
class Timer extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }
  
  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  // async getInfo(){
  //   // fetch()
  // }
  // async loadInfo(){
  //   this.setState({
  //   })
  //   // const info =  await getInfo()
  //   // this.setState({info})
  // }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <div>time is : {this.state.date.toLocaleTimeString()}</div>;
  }
}
export default Timer;
