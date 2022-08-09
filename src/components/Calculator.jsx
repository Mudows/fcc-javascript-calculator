import React from "react";
import { connect } from "react-redux";
import Keyboard from "./buttons/Keyboard";
import Display from "./display/Display";

class Calculator extends React.Component {
  render() {
    return (
      <div id="calculator">
        <Display />
        <Keyboard />
      </div>
    )
  }
}

export default connect()(Calculator);
