import React, { Component } from "react";
import PropTypes from "prop-types";

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
        onClick={this.props.handleAlert}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
    style: 
}

export default Button;
