import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContainer } from 'react-hot-loader';
import './index.css';




console.log("Working");

const render = (Component) => {

  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );

}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  });
}
