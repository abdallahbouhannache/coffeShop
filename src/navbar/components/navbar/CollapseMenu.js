import React from "react";
import styled from "styled-components";
// import {Link} from react-link

import { useSpring, animated } from "react-spring";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              menu
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              contact
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              about
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              offers
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #dbac1f;
  position: fixed;
  top: 6.7rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #faf9daf5;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #000;
      border-bottom: 1px solid #000;
    }
  }
`;
