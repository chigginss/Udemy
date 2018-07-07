"use strict";

console.log('App.js is runnning!');

// JSX 

// only render the subtitle and p tag if subtitle exists
// render new p tag if there are items in options
var app = {
    title: "Indecision App",
    subtitle: "CANT MAKE UP YO MIND?",
    options: ['One', 'Two']
};

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
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

// const user = {
//     name: 'Cierra',
//     age: 25,
//     location: 'San Francisco'
// };

// // if location doesn't exist

// function getLocation(location) {
//   if (location) {
//     return <p> Location: {location}</p>;
//   }
// }

// // cannot just render an object in react! must use user.name

// // user.name ? user.name means return name or other value
// //undefined, null and boolean values are ignored by JSX
// // <p>Age: {user.age}</p>
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

var count = 0;
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " Count: ",
        count
    ),
    React.createElement(
        "button",
        { id: "my-id", className: "button" },
        "+1"
    )
);

console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
