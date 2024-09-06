//We're going to have a router in here that'll help route us from
//from the home page to other pages in the app
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header";

// reason for bg being set inline is that because o 2/3 of our Headers have a background
export default function Header({ bg = true, children, ...restOfProp }) {
  return bg ? <Background {...restOfProp}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restOfProp }) {
  return <Container {...restOfProp}>{children}</Container>;
};

//the 'to' parameter just tells us where we want our logo to go in our app
Header.Logo = function HeaderLogo({ to, ...restOfProp }) {
  //this is where we use more routers
  return (
    <ReactRouterLink to={to}>
      {" "}
      {/*to-> destination we'd like to be routed to*/}
      <Logo {...restOfProp} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restOfProp }) {
  return <ButtonLink {...restOfProp}>{children}</ButtonLink>;
};
