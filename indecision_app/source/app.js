
// react components are basically just classes
// to create a new components
// The goal is to NOT use JSX and use React Components instead
// React enforces uppercase first letter
// component props  = adding data when you initalize
// props are similar to atributes in HTML
// use key value pair and use this - reference to current instance of component

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';
    const options = ['pizza', 'burger', 'fries'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    );
  }

}

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }

}

class Action extends React.Component {
  handlePick() {
    alert('youve been picked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );

  }

}


class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    alert('removed all');

  }
  render() {
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
        {
            this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }

}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    );
  }
}

class AddOptions extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert("option added")
          // this.props.options.push(option)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Submit</button>
        </form>
      </div>
    );
  }

}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));