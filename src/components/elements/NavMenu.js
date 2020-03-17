import React, { Component } from "react";
import { Menu, Segment, Image, Container, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
export default class NavMenu extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: "Coffee",
      loading: true,
      menuHeaders: [
        ["juices", "coffes"],
        ["milks", "stuffs", "somthing"],
        ["one", "two", "three", "four"]
      ],
      menuChoices: [
        {
          laté: "something about coffe",
          juice_Coja: "i just write some"
        },
        {
          globalMlik: "something about coffe",
          nindjaMilk: "i just write some",
          nothing: "i just write some"
        },
        {
          one: "something about coffe",
          tow: "something about coffe",
          three: "something about coffe",
          four: "something about coffe"
        }
      ]
    };
    this.MenuContent = this.MenuContent.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleItemClickTwo = e =>
    (e.currentTarget.nextSibling.style.display =
      e.currentTarget.nextSibling.style.display === "none" ? "flex" : "none");

  MenuContent = (choice, loading) => {
    if (!this.state.loading) {
      return (
        <React.Fragment>
          <Container className="ItemDesc">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            </p>
          </Container>
          <List className="ListMenuCoffe" link>
            {this.state.menuHeaders.map((el, i) => {
              let mChoices = this.state.menuChoices[i];
              let keys = Object.keys(mChoices);
              let rChoices = [];
              for (let el of keys) {
                rChoices.push(
                  <List.Item className="">
                    <span>{el}: </span>
                    <span>{mChoices[el]}</span>
                  </List.Item>
                );
              }
              return el.map((e, i) => (
                <List.Item className="listEl">
                  <List.Header
                    className="ListHeader"
                    onClick={this.handleItemClickTwo}
                  >
                    ---{e}---
                  </List.Header>
                  <List.List className="contentItem">{rChoices}</List.List>
                </List.Item>
              ));
            })}
          </List>
        </React.Fragment>
      );
    } else {
      return <Image src={require("../../assets/paragraph.png")} />;
    }
  };
  render() {
    const { activeItem } = this.state;
    this.state.loading = false;

    return (
      <div className="menuwrp">
        <Segment
          className="MenuContent"
          loading={this.state.loading}
          attached="top"
        >
          <this.MenuContent />
        </Segment>
        <Menu tabular attached="bottom" className="navmenu">
          <Menu.Item>
            <img src={require("../../assets/coffeCup.png")} />
          </Menu.Item>

          <Menu.Item
            name="Coffee"
            active={activeItem === "Coffee"}
            onClick={this.handleItemClick}
            style={{ color: activeItem === "Coffee" ? "#000" : "#fff" }}
          >
            Coffee
          </Menu.Item>

          <Menu.Item
            name="Cakes"
            active={activeItem === "Cakes"}
            onClick={this.handleItemClick}
            style={{ color: activeItem === "Cakes" ? "#000" : "#fff" }}
          >
            Cakes
          </Menu.Item>

          <Menu.Item
            name="Juices"
            active={activeItem === "Juices"}
            onClick={this.handleItemClick}
            style={{ color: activeItem === "Juices" ? "#000" : "#fff" }}
          >
            Juices
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
