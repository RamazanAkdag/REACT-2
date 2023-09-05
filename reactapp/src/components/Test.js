import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    //api istekleri burda yapılabilir
    this.setState({
      a: 20,
    });
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate");
  };

  render() {
    console.log("render");
    return <div></div>;
  }
}
export default Test;
