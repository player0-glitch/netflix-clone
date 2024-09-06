import React from "react";
import { Feature, OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";

export default function HOME() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited Archive of Marvel Superheroes and more
            <Feature.Subtitle>
              There's more to marvel than the Avengers
            </Feature.Subtitle>
          </Feature.Title>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try It Now</OptForm.Button>
            <OptForm.Text>
              Ready To Join? Enter your email to recieve news letters
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
