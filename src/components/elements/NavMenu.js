import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
export default class NavMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable className="navmenu">
        <Menu.Item>
          <img src={require("../../assets/coffeCup.png")} />
        </Menu.Item>

        <Menu.Item
          name="Coffee"
          active={activeItem === "features"}
          onClick={this.handleItemClick}
        >
          Coffee
        </Menu.Item>

        <Menu.Item
          name="Cakes"
          active={activeItem === "testimonials"}
          onClick={this.handleItemClick}
        >
          Cakes
        </Menu.Item>

        <Menu.Item
          name="Juices"
          active={activeItem === "sign-in"}
          onClick={this.handleItemClick}
        >
          Juices
        </Menu.Item>
      </Menu>
    );
  }
}
