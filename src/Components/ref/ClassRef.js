import { createRef } from "react";
import React from "react";

class ClassRef extends React.Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }
  changeHandler = () => {};
  render() {
    return (
      <div>
        <input type="text" ref={this.input} />
        <button>reset</button>
      </div>
    );
  }
}

export default ClassRef;
