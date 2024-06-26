import React, { useState } from "react";
import styled from "styled-components";
// import {Link} from react-link

import { useSpring, animated } from "react-spring";

const CollapseMenu = (props) => {
  // var open = 25;
  // const [state, setState] = useState({ open: 0 });

  // open = useSpring({
  //   open: props.navbarState ? 0 : 25,
  // });
  // visbility: open.value

  // console.log(props.collapsMenuPos);
  const enter = useSpring({
    from: { transform: "translateX(-100em)" },
    transform: "translateX(0)",
  });

  // props.navbarState ? 0 : 25

  return (
    <CollapseWrapper
      id="nvbarcollaps"
      style={{ transform: `translateY(-${props.collapsMenuPos}em)` }}
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
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #dbac1f;
  position: fixed;
  top: 4.4em;
  left: 0;
  right: 0;
  z-index: 1;
  transition: all 0.33s ease-in-out;
  @media (min-width: 768px) {
    visibility: hidden;
  }
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
