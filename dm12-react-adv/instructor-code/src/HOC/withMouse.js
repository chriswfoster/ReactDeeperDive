import React from "react";

const withMouse = Component => {
  return class extends React.Component {
    render() {
      return <Component />;
    }
  };
};

export default withMouse;
