import React, { Component } from "react";
import withMouse from "./withMouse";

class Mouse extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        The Location of the Mouse is {this.props.mouse.x} and{" "}
        {this.props.mouse.y}
      </div>
    );
  }
}

export const MouseHOC = withMouse(Mouse);
