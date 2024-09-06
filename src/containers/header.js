import React, { Children } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="MarvelFlix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign-in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
