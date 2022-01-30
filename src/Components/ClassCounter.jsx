import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}
  addHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
            console.log(this.state.name);
          }}
        />
        <button onClick={() => this.addHandler()}>
          count : {this.state.count}
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default ClassCounter;
