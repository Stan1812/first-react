import React, { Component } from "react";
class InputPart extends Component {
  constructor() {
    super();
    console.log("construct");
  }
  handleOnChange(event) {
    this.props.setNum && this.props.setNum(event.target.value);
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("did Mount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <input type="text" onChange={this.handleOnChange.bind(this)} />
      </div>
    );
  }
}
class PercentShower extends Component {
  static defaultProps = {
    percentStage: 0
  };
  render() {
    let out = this.props.percentStage;
    return <div>{out > 0 && out < 1 ? (out * 100).toFixed(2) : out}%</div>;
  }
}
class PercentageApp extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }
  handleInput(num) {
    this.setState({ num: num });
  }
  render() {
    return (
      <div>
        <InputPart setNum={this.handleInput.bind(this)} />
        <PercentShower percentStage={this.state.num} />
        <Delete></Delete>
      </div>
    );
  }
}
class Title extends Component{
  componentWillUnmount(){
    console.log("unMount")
  }
  componentWillMount(){
    console.log("will mount")
  }
  render(){
    console.log("render")
    return(
      <div>
        this is a title
      </div>
    )
  }
}

class Delete extends Component {
  constructor() {
    super()
    this.state={
      showTitle : false
    }
  }
  handleClick(){
    this.setState({
      showTitle:!this.state.showTitle
    })
  }
  render(){
    return(
      <div>
        {this.state.showTitle?<Title/>:null}
        <button onClick={this.handleClick.bind(this)}>
          show or hide
        </button>
      </div>
    )
  }
}
export default PercentageApp;
