import React, { Component } from "react";
import withMouse from "./withMouse";

class Mouse extends Component {
  render() {
    return <div>This Is A Component</div>;
  }
}

export const MouseHOC = withMouse(Mouse);
