import React from "react";
import { connect } from "react-redux";
import SmallBtn from "./SmallBtn";
import WideBtn from "./WideBtn";

class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard">
        <WideBtn sign={ 'AC' } btnId={'clear'} />
        <SmallBtn sign={ "." } btnId={'decimal'} />
        <SmallBtn sign={ '+' } btnId={'add'} />
        <SmallBtn sign={ 7 } btnId={'seven'} />
        <SmallBtn sign={ 8 } btnId={'eight'} />
        <SmallBtn sign={ 9 } btnId={'nine'} />
        <SmallBtn sign={ '-' } btnId={'subtract'} />
        <SmallBtn sign={ 4 } btnId={'four'} />
        <SmallBtn sign={ 5 } btnId={'five'} />
        <SmallBtn sign={ 6 } btnId={'six'} />
        <SmallBtn sign={ 'x' } btnId={'multiply'} />
        <SmallBtn sign={ 1 } btnId={'one'} />
        <SmallBtn sign={ 2 } btnId={'two'} />
        <SmallBtn sign={ 3 } btnId={'three'} />
        <SmallBtn sign={ '/' } btnId={'divide'} />
        <WideBtn sign={ 0 } btnId={'zero'} />
        <WideBtn sign={ "=" } btnId={'equals'} />
      </div>
    );
  }
}

export default connect()(Keyboard);
