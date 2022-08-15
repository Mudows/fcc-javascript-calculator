import React from "react";
import { connect } from "react-redux";
import Keyboard from "./buttons/Keyboard";
import Display from "./display/Display";

class Calculator extends React.Component {
  render() {
    return (
      <div id="calculator">
        <span>Mudow's JS Calculator</span>
        <Display />
        <Keyboard />
        <div id="signature">Designed and coded by Diego M. Cezar</div>
      </div>
    )
  }
}

export default connect()(Calculator);
