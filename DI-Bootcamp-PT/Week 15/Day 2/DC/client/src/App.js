// client/App.js

import React, { Component } from "react";

class App extends Component {
  state = {
    message: "",
  };

  async componentDidMount() {
    try {
      const response = await fetch("/api/hello");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format");
      }
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error condition: display an error message or perform other actions as needed
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
