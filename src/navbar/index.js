import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./styles/Global";

class index extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default index;
