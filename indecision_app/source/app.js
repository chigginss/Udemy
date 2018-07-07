console.log('App.js is runnning!');

// JSX 

// only render the subtitle and p tag if subtitle exists
// render new p tag if there are items in options
const app = {
    title: "Indecision App",
    subtitle: "CANT MAKE UP YO MIND?",
    options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
  </div>
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

let count = 0;
const templateTwo = (
  <div>
      <h1> Count: {count}</h1>
      <button id="my-id" className="button">+1</button>
  </div>
);

console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);