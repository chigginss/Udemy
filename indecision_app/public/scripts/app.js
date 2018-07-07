"use strict";

console.log('App.js is runnning!');

// JSX 

// only render the subtitle and p tag if subtitle exists
// render new p tag if there are items in options
var app = {
  title: "Indecision App",
  subtitle: "CANT MAKE UP YO MIND?",
  options: []
};

// do not want to call onFormSubmit because it will return the result of below function
// e.target = event that started on
//.elements.options.value = returns value
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = " ";
    render();
  };
};

// create "Remove All" button above list
// on click -> wipe the array -> rerender
var clearArray = function clearArray() {
  app.options = [];
  render();
};

// generate random number between 0-9! 
// Math.random returns a random number between 0-1
// add range and Math.floor to round down
var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

// A key prob allows JSX to render 
var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: clearArray },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
