import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    return(
      <div id="display">
        display
      </div>
    )
  }
}

export default connect()(Display);
