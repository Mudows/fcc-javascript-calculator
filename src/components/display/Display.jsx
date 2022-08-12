import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    const { expressionInput, expressionRequested} = this.props;
    return(
      <div id="full-display">
        <p id="top-display">{ expressionRequested }</p>
        <p id="display">{ expressionInput }</p>
      </div>
    )
  }
}

Display.propTypes = {
  expressionInput: PropTypes.string,
  expressionRequested: PropTypes.string
}.isRequired;

const mapStateToProps = (state) => ({
  expressionInput: state.expressionInput,
  expressionRequested: state.expressionRequested
});

export default connect(mapStateToProps, null)(Display);
