import React from "react";
import {
  Container,
  Pane,
  Inner,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

//this is component we can call in our app
//compound components and props in components (https://youtu.be/N_WgBU3S9W8?si=-oCAbCZ7CCzjMcJc)
export default function Jumbotron({
  children,
  direction = "row",
  ...restOfProps
}) {
  return (
    <Item {...restOfProps}>
      {/* //we defined this in the Jumbotrom.js (it comes imported with a styles) */}
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

//create the jumbotron container we wish to hold our Jumbotrons
Jumbotron.Container = function JumbotronContainer({
  children,
  ...restOfProps
}) {
  return <Container {...restOfProps}>{children}</Container>;
};

//creating the jumbotron title we wish to define for ourselves
Jumbotron.Pane = function JumbotronPane({ children, ...restOfProps }) {
  return <Pane {...restOfProps}>{children}</Pane>;
};

//defining our title pane
Jumbotron.Title = function JumbotronTitle({ children, ...restOfProps }) {
  return <Title {...restOfProps}>{children}</Title>;
};

//defining our subtitle pane
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restOfProps }) {
  return <SubTitle {...restOfProps}>{children}</SubTitle>;
};

//defining our images pane, this does not return any children
Jumbotron.Image = function JumbotromImage({ ...restOfProps }) {
  return <Image {...restOfProps} />;
};
