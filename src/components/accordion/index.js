import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Title,
  Item,
  Frame,
  Header,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restOfProp }) {
  return (
    <Container {...restOfProp}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restOfProp }) {
  return <Title {...restOfProp}>{children}</Title>;
};
Accordion.Frame = function AccordionFrame({ children, ...restOfProp }) {
  return <Frame {...restOfProp}>{children}</Frame>;
};

//primary container for our FAQ because it'll make use of the user's state machine from React
Accordion.Item = function AccordionItem({ children, ...restOfProp }) {
  // toggleShow and setToggleShow are defined from the user useState
  const [toggleShow, setToggleShow] = useState(false);

  //Learn about use state
  //allows us to get the state of an item so we can determine the global state of
  //the whole page
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restOfProp}>{children}</Item>
    </ToggleContext.Provider>
  );
};

//the header of our FAQs before they're opened (and the body is shown) with the X mark
//this should animate and do something when the X mark is pressed on click
//Each FAQ has its' very own state
Accordion.Header = function AccordionHeader({ children, ...restOfProp }) {
  //this is how we get the state of our item from the page
  //ToggleContext houses all the details of the state impacted by this file

  const { toggleShow, setToggleShow } = useContext(ToggleContext); //global variable

  return (
    //checking the state given to use so that we can properly make it inverse
    <Header onClick={() => setToggleShow(!toggleShow)} {...restOfProp}>
      {children}
      {/* <pre>{JSON.stringify(toggleShow,null,2)}</pre> */}
      {toggleShow ? (
        // for when the state of the FAQ header is open, show the 'Close' icon
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        //for when the state of the FAQ header is close, show the 'Open' icon
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restOfProp }) {
  const { toggleShow } = useContext(ToggleContext);

  //only show the body of the FAQ iff the state is set to show otherwise nothing
  // return (
  //   <Body className={toggleShow ? "Open" : "Close"} {...restOfProp}>
  //     <span>{children}</span>
  //   </Body>
  // );
  return toggleShow ? (
    <Body className={toggleShow ? "Open" : "Close"} {...restOfProp}>
      <span>{children}</span>
    </Body>
  ) : null;
};
