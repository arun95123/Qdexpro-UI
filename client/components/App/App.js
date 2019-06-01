import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import ContentArea from "../ContentArea";
import Header from "../Header";
import LeftPane from "../LeftPane";

const App = () => (
  <div>
    <LeftPane />
    <ContentArea />
  </div>
);

export default App;
