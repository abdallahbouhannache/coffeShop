import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./styles/Global";

function Index(props) {
  const [state, setState] = useState({
    navbarOpen: false,
    collapsMenuPos: 25,
  });

  const handleNavbar = () => {
    setState({ navbarOpen: !state.navbarOpen });
  };

  return (
    <React.Fragment>
      <Navbar
        navbarState={state.navbarOpen}
        collapsMenuPos={state.collapsMenuPos}
        handleNavbar={(e) => {
          setState({
            collapsMenuPos: state.navbarOpen ? 25 : 0,
            navbarOpen: !state.navbarOpen,
          });
        }}
      />
      {/* <GlobalStyle /> */}
    </React.Fragment>
  );
}

export default Index;
