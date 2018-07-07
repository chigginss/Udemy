
//Create a user Object and render to DOM
""" Create User object with interchangible parts"""

const user = {
    name: 'Cierra',
    age: 25,
    location: 'San Francisco'
};

// if location doesn't exist

function getLocation(location) {
  if (location) {
    return <p> Location: {location}</p>;
  }
}

// cannot just render an object in react! must use user.name

// user.name ? user.name means return name or other value
//undefined, null and boolean values are ignored by JSX
// <p>Age: {user.age}</p>

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const templateTwo = (
  <div>
      <h1> Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetButton}>'Reset'</button>
  </div>
);

///Counter Example 
""" Increase count using React """


// React uses an algorithm to find out what needs to be replaced
// ReactDOM.render is using the virual DOM algorithm
// Render and re-render applciation
// What does this mean:
// When a single part of applciation changes, we can re-render without worrying about resources or bugs
// the virual DOM algorithm calculates if any changes need to be made and if they do 
// it finds out ONLY the parts that need to change, avoiding a re-render of everything


let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count = count - 1;
  renderCounterApp();
};
const resetButton = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
        <h1> Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetButton}>'Reset'</button>
    </div>
  );

ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();