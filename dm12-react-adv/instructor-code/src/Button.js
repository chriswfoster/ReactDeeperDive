import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        style={{
          border: this.props.style.border,
          padding: this.props.style.padding,
          backgroundColor: this.props.style.backgroundColor,
          color: this.props.style.color
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
