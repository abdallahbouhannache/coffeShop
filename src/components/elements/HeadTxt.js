import React from "react";
import { Header } from "semantic-ui-react";

const styleHead = {
  margin: "40px",
  border: "5px solid pink"
};
const stylesubHead = {
  fontSize: "15px",
  textAlign: "center"
};

const HeaderWithSubHeader = props => (
  <Header as="h2" color={"red" || props.Headcolor}>
    {props.Head}
    <Header.Subheader color={"red" || props.subHeadcolor}>
      {props.subHead}
    </Header.Subheader>
  </Header>
);

export default HeaderWithSubHeader;
