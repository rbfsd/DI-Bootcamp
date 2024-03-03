// App.js
import React, { Component } from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import { LifecycleExample, Child } from "./components/LifeCycleEx";

class App extends Component {
  render() {
    return (
      (
        <div>
          <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>

          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>

          <BuggyCounter />
        </div>
      ),
      (<LifecycleExample />)
    );
  }
}

export default App;
