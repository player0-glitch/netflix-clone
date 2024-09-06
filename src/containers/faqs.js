import React from "react";
import faqsData from "../fixtures/faq.json";
import { Accordion } from "../components";

export function FaqsContainer() {
  return (
    <Accordion>
      {/* This is the title of the FAQ page */}
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        // with every iteratoin we create an FAQ item
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
