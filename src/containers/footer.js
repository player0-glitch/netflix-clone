import React from "react";
import { Footer } from "../components"; //was exported in the index.js file in the components

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>
        Questions, this is just a demo but do contact me
      </Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQs</Footer.Link>
          <Footer.Link href="#">Learn More</Footer.Link>
          <Footer.Link href="#">Contact Me</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>MarvelFlix, South Africa Demo Product</Footer.Text>
    </Footer>
  );
}
