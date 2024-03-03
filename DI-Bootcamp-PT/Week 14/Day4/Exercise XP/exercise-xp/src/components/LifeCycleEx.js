// LifecycleExample.js
import React, { Component } from "react";

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  componentDidMount() {
    // Simulate a state change after mounting
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate - Returning true");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate - Component has been updated in the DOM");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate - In getSnapshotBeforeUpdate");
    console.log("Previous state:", prevState.favoriteColor);
    return null;
  }

  handleDelete = () => {
    this.setState({ show: false });
  };

  render() {
    console.log("render - Rendering the component");
    return (
      <div>
        <div
          style={{ border: "2px solid grey", padding: "10px", margin: "10px" }}
        >
          <h2 style={{ color: this.state.favoriteColor }}>
            {this.state.favoriteColor}
          </h2>
          <button onClick={() => this.setState({ favoriteColor: "blue" })}>
            Change Color to Blue
          </button>
        </div>
        <div>
          {this.state.show && <Child />}
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("Unmounted!");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

export { LifecycleExample, Child };
