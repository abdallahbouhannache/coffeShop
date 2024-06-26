import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import $ from "jquery";

// import {Link} from react-link

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <React.Fragment>
      <NavBar id="navbar" style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a className="liens" href="#part3">
              menu
            </a>
            <a className="liens" href="#part1">
              main
            </a>
            <a className="liens" href="#Shop">
              Shop
            </a>
            <a className="liens" href="#About">
              contact
            </a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>

      <CollapseMenu
      collapsMenuPos={props.collapsMenuPos}
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </React.Fragment>
  );
};

// export default Navbar;
export default React.memo(Navbar);

const NavBar = styled(animated.nav)`
  will-change: transform;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #0c1011b4;
  z-index: 10;
  font-size: 1.4rem;
  transition: all 0.33s ease-in-out;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 4.4rem;
`;

const NavLinks = styled(animated.ul)`
  will-change: transform, opacity;
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #faf9daf5;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  border: "10px solid red";

  @media (min-width: 769px) {
    display: none;
  }
`;
