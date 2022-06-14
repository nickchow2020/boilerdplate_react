import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, World</h1>
        <Button />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
