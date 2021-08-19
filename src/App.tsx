import React from "react";
import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";
import DatePicker from "./Pages/DatePicker";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <DatePicker />
        </Route>
        <Route path="/sabado">
          <h2>sabado</h2>
        </Route>
        <Route path="/domingo">
          <h2>domingo</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;
