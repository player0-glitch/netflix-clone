import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Break,
  Text,
} from "../footer/styles/footer";

//this index page is for the footer at the bottom of our pages
export default function Footer({ children, ...restOfProp }) {
  return <Container {...restOfProp}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restOfProp }) {
  return <Row {...restOfProp}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restOfProp }) {
  return <Column {...restOfProp}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restOfProp }) {
  return <Link {...restOfProp}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restOfProp }) {
  return <Title {...restOfProp}>{children}</Title>;
};

Footer.Break = function FooterBreak({ children, ...restOfProp }) {
  return <Break {...restOfProp}>{children}</Break>;
};

Footer.Text = function FunctionText({ children, ...restOfProp }) {
  return <Text {...restOfProp}>{children}</Text>;
};
