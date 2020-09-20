import React from "react";
import "./index.css";
import { hot } from "react-hot-loader";
import Counter from "./components/Counter.jsx";
import { TestComponent } from "./libs/TestComponent.jsx";

const App = () => (
  <div>
    <Counter />
    <TestComponent />
  </div>
);

export default hot(module)(App);
