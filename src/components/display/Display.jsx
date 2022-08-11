import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    return(
      <div id="display">
        <div id="top-display">input</div>
        <div id="bottom-display">{ 3 + 5 * 6 - 2 / 4 }</div>
      </div>
    )
  }
}

export default connect()(Display);
