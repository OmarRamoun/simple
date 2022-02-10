import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import eventListener from "./bubbles";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

eventListener();
const themeButtons = document.querySelectorAll(".theme-chooser-button");

for (let i = 0; i < themeButtons.length; i++) {
  // get data-theme attribute from button
  const bg = themeButtons[i].getAttribute("data-bg");
  const bs = themeButtons[i].getAttribute("data-bs");
  console.log(bg);
  // set button bg to data-background
  themeButtons[i].style.background = bg;
  themeButtons[i].style.boxShadow = bs;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
