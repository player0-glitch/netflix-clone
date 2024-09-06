import React from "react";
import jumboData from "../fixtures/jumbo.json";
import Jumbotron from "../components/jumbotron";

export function JumbotronContainer() {
  //calling our component that is defined in /jumbotron/index
  return (
    //Always add keys to iterables in react
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            {/* This will be on the right side of the Pane */}
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>

          <Jumbotron.Pane>
            {/* this image is passed in as a prop in this component 
              This will be on the left side of the pane*/}
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
