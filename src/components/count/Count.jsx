import React, { Component } from "react";

import Display from "./DisplayCount";
import Button from "./ButtonCount";
import Input from "./InputsCount";
import "./Count.css";

class Count extends Component {
  state = {
    number: this.props.numberCount || 0,
    step: this.props.step || 0,
  };

  whenChange = (number) => {
    this.setState({
      number: number
    });
  };

  whenStep = (step) => {
    this.setState({
      step: step
    });
  };

  plus = (value) => {
    console.log(value);
    if (value === 5) {
      this.setState({
        number: this.state.number + value,
      });
    } else {
      this.setState({
        number: this.state.number + this.state.step,
      });
    }
  };

  less = (value) => {
    if (value === 5) {
      this.setState({
        number: this.state.number - value,
      });
    } else {
      this.setState({
        number: this.state.number - this.state.step,
      });
    }
  };

  render() {
    return (
      <div className="Count">
        <h2>Contador</h2>
        <Display number={this.state.number} />
        <div>
          <Input
            id={"count"}
            args={"Número: "}
            type={"number"}
            placeholder={"Valor para contador"}
            value={this.state.number}
            change={this.whenChange}
          />
        </div>
        <div>
          <Input
            id={"step"}
            args={"Passo: "}
            type={"number"}
            placeholder={"Passo mais..."}
            value={this.state.step}
            change={this.whenStep}
          />
        </div>
        <div>
          <Button clickButton={this.plus}>+</Button>
          <Button clickButton={this.less}>-</Button>
          <Button clickButton={() => this.plus(5)}>+5</Button>
          <Button clickButton={() => this.less(5)}>-5</Button>
        </div>
      </div>
    );
  }
}

export default Count;
