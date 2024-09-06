import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/opt-form";

export default function OptForm({ children, ...restOfProp }) {
  return <Container {...restOfProp}>{children}</Container>;
}
OptForm.Input = function OptFormInput({ children, ...restOfProp }) {
  return <Input {...restOfProp} />;
};

OptForm.Button = function OptFormButton({ children, ...restOfProp }) {
  return (
    <Button {...restOfProp}>
      {children}
      <img src="./images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restOfProp }) {
  return <Text {...restOfProp}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restOfProp }) {
  return <Break {...restOfProp} />;
};
