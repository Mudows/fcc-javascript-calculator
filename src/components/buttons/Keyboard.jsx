import React from 'react';
import { connect } from 'react-redux';
import SmallBtn from './SmallBtn';
import WideBtn from './WideBtn';
import { updateInput, clearExpressions, calculateResult } from '../../redux/actions/index';

class Keyboard extends React.Component {
  handleClick = (event) => {
    const { dispatch } = this.props;
    let data;
    if (event.target.innerHTML === 'x') {
      data = '*';
    } else {
      data = event.target.innerHTML;
    }
    dispatch(updateInput(data));
  };

  allClear = () => {
    const { dispatch } = this.props;
    dispatch(clearExpressions());    
  };

  calculateExpression = () => {
    const { dispatch } = this.props;
    dispatch(calculateResult());  
  };

  render() {
    const signArray = [
      { sign: '.', desc: 'decimal' },
      { sign: '+', desc: 'add' },
      { sign: '7', desc: 'seven' },
      { sign: '8', desc: 'eight' },
      { sign: '9', desc: 'nine' },
      { sign: '-', desc: 'subtract' },
      { sign: '4', desc: 'four' },
      { sign: '5', desc: 'five' },
      { sign: '6', desc: 'six' },
      { sign: 'x', desc: 'multiply' },
      { sign: '1', desc: 'one' },
      { sign: '2', desc: 'two' },
      { sign: '3', desc: 'three' },
      { sign: '/', desc: 'divide' },
    ];
    return (
      <div className="keyboard">
        <WideBtn sign={'AC'} btnId={'clear'} handleClick={this.allClear} />
        {signArray.map((obj) => (
          <SmallBtn
            key={obj.desc}
            sign={obj.sign}
            btnId={obj.desc}
            handleClick={this.handleClick}
          />
        ))}
        <WideBtn sign={0} btnId={'zero'} handleClick={this.handleClick} />
        <WideBtn sign={'='} btnId={'equals'} handleClick={this.calculateExpression} />
      </div>
    );
  }
}

export default connect()(Keyboard);
