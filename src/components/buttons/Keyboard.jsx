import React from "react";
import { connect } from "react-redux";
import SmallBtn from "./SmallBtn";

class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard">
        <SmallBtn sign={ 0 } btnId={'zero'} />
        <SmallBtn sign={ 1 } btnId={'one'} />
        <SmallBtn sign={ 2 } btnId={'two'} />
        <SmallBtn sign={ 3 } btnId={'three'} />
        <SmallBtn sign={ 4 } btnId={'four'} />
        <SmallBtn sign={ 5 } btnId={'five'} />
        <SmallBtn sign={ 6 } btnId={'six'} />
        <SmallBtn sign={ 7 } btnId={'seven'} />
        <SmallBtn sign={ 8 } btnId={'eight'} />
        <SmallBtn sign={ 9 } btnId={'nine'} />
        <SmallBtn sign={ "." } btnId={'decimal'} />
        <SmallBtn sign={ '+' } btnId={'add'} />
        <SmallBtn sign={ '-' } btnId={'subtract'} />
        <SmallBtn sign={ 'x' } btnId={'multiply'} />
        <SmallBtn sign={ '/' } btnId={'divide'} />
        <SmallBtn sign={ "=" } btnId={'equals'} />
        <SmallBtn sign={ 'AC' } btnId={'clear'} />
      </div>
    );
  }
}

export default connect()(Keyboard);
