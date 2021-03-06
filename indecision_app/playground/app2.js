import React from 'react'; 
import ReactDOM from 'react-dom'; 

const template = <p>THIS IS JSX</p>;
ReactDOM.render(template, document.getElementById('app'));


"build-babel": "babel source/app.js --out-file=public/scripts/app.js --presets=env,react --watch",
// webpack is running babel any time there is a js file
// this is stored in the bundle webpack file

// importing npm validator
// install import validator
// installed first NPM module 

// import validator from 'validator';

// console.log(validator.isEmail('test'));


// tests
// import subtract, { square, add } from './utils.js';

// console.log("app2 is running!!");
// console.log(add(100, 10));
// console.log(square(4));
// console.log(subtract(100, 10));

//person.js
// named exports - isAdult
// can drink

// import { isAdult, canDrink } from './person.js';
// import isSenior from './person.js';

// console.log(isSenior(19));
// console.log(canDrink(22));

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {

    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleDeleteOptions() {
    this.setState(() => ({options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    if (this.state.options.length < 1) {
      alert("No options avaliable");
    } else {
    alert(option);
    }
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';
    
    return (
      <div>
        <Header />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <AddOptions handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I?
      </button>
    </div>
  );
};


const Options = (props) => {
  return (
      <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
            props.options.map((option) => (
              <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}/>
          ))
        }
      </div>
    );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {props.handleDeleteOption(props.optionText);}}>Remove</button>
    </div>
  );
};

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error}));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Submit</button>
        </form>
      </div>
    );
  }

}

// this is the same as this.props 

// const User = (props) => {
//   return (
//     <div>
//       <p>name: {props.name}</p>
//       <p>age: {props.age}</p>
//     </div>
//   )

// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));