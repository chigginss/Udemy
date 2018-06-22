console.log('App.js is runnning!');

// JSX 

let app = {

    title: "Indecision App",
    subtitle: "CANT MAKE UP YO MIND?"
};

let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>HI</li>
        <li>THERE</li>
    </ol>
  </div>
);

let user = {
    // name: 'Cierra',
    age: 25,
    // location: 'San Francisco'
};

function getLocation(location) {
  if (location) {
    return <p> Location: {location}</p>;
  }
}

// cannot just render an object in react! must use user.name

// let userName = 'Cierra Higgins';
// let userAge = 25;
// let userLocal = 'San Francisco'

let templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);