import React from "react";
import { Container, Subtitle, Title } from "../features/styles/feature";

export default function Feature({ children, ...restOfProp }) {
  return <Container {...restOfProp}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restOfProp }) {
  return <Title {...restOfProp}>{children}</Title>;
};

Feature.Subtitle = function FeatureSubtitle({ children, ...restOfProp }) {
  return <Subtitle {...restOfProp}>{children}</Subtitle>;
};
