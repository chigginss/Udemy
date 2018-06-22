"use strict";

console.log('App.js is runnning!');

// JSX 

var app = {

  title: "Indecision App",
  subtitle: "CANT MAKE UP YO MIND?"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "HI"
    ),
    React.createElement(
      "li",
      null,
      "THERE"
    )
  )
);

var user = {
  // name: 'Cierra',
  age: 25
  // location: 'San Francisco'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      " Location: ",
      location
    );
  }
}

// cannot just render an object in react! must use user.name

// let userName = 'Cierra Higgins';
// let userAge = 25;
// let userLocal = 'San Francisco'

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Anonymous'
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
