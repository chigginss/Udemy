
//react components are basically just classes
// to create a new components
// The goal is to NOT use JSX and use React Components instead
// React enforces uppercase first letter

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Leave it to the computer!</h2>
      </div>
    );
  }

}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );

  }

}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Options</li>
        </ul>
      </div>
    );
  }

}

class AddOptions extends React.Component {
  render() {
    return (
      <div>
        add Option
      </div>
    );
  }

}

const jsx = (
<div>
  <Header />
  <Action />
  <Options />
  <AddOptions />
</div>
);

ReactDOM.render(jsx, document.getElementById('app'));