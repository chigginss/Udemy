console.log('App.js is runnning!');

// JSX 

// only render the subtitle and p tag if subtitle exists
// render new p tag if there are items in options
const app = {
    title: "Indecision App",
    subtitle: "CANT MAKE UP YO MIND?",
    options: []
};

// do not want to call onFormSubmit because it will return the result of below function
// e.target = event that started on
//.elements.options.value = returns value
const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = " "; 
    render();
  };
};

// create "Remove All" button above list
// on click -> wipe the array -> rerender
const clearArray = () => {
  app.options = [];
  render();
};

// generate random number between 0-9! 
// Math.random returns a random number between 0-1
// add range and Math.floor to round down
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

// A key prob allows JSX to render 
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={clearArray}>Remove All</button>
      <ol>
          {
            app.options.map((option) => {
              return <li key={option}>{option}</li>
            })
          }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();