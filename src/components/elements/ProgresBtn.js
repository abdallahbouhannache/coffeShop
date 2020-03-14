import React, { Component } from "react";
import ProgressButton from "react-progress-button";
// import {StyleBtn} from '../styles/elements.css'

class ProgresBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: "" };
    this._handleClick = this._handleClick.bind(this);
  }

  //   _handleClick() {
  //     this.setState({ buttonState: "loading" });
  //     // make asynchronous call
  //     setTimeout(() => {
  //       this.setState({ buttonState: "success" });
  //     }, 3000);
  //   }
  _handleClick() {
    return new Promise(function(resolve, reject) {
      setTimeout(resolve, 3000);
    });
  }
  render() {
    return (
      <div>
        <ProgressButton
          onClick={this.handleClick}
          //   state={this.state.buttonState}
        >
          Go!
        </ProgressButton>
      </div>
    );
  }
}

export default ProgresBtn;
