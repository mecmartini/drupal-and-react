import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

import "./assets/css/global.css";

declare global {
  interface Window {
    drupalSettings: {
      drupal_and_react_app: Settings;
    };
  }
}

interface Elements {
  id: number;
  wrapper: string;
  content: string[];
}

interface Settings {
  [index: string]: Elements;
}

const drupalAndReactApp: Settings =
  window.drupalSettings.drupal_and_react_app || {};

Object.keys(drupalAndReactApp).forEach((key: string) => {
  const { wrapper, content } = drupalAndReactApp[key];
  ReactDOM.render(
    <React.StrictMode>
      <App content={content} />
    </React.StrictMode>,
    document.getElementById(wrapper)
  );
});
