import React, { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));

    if (this.state.counter === 4) {
      // Simulating an error when the counter reaches 5
      throw new Error("I crashed!");
    }
  };

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Counter: {this.state.counter}</h2>
      </div>
    );
  }
}

export default BuggyCounter;
