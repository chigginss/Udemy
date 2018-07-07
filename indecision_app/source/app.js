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

const appRoot = document.getElementById('app');

