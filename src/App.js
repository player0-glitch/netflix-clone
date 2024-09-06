import React from "react";
// learn about React Routers, BrowserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.BROWSE} element={<Browse />} />
        <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />
        <Route exact path={ROUTES.SIGN_UP} element={<Signup />} />
      </Routes>
    </Router>
  );
}
