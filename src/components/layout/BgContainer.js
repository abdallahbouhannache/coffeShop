import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import "../styles/elements.css";

const stylesubHead = {
  display: "flex",
  textAlign: "center"
};
class BgCont extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Image src={this.props.pic} className="bgPic" />;
  }
}

export default BgCont;
