
import React from 'react'; 
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//old
// class OldSyntax {
//   constructor() {
//     this.name = 'Cierra';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return 'Hi. my name is ${this.name}';
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// // console.log(oldSyntax)
// console.log(getGreeting());

// //new

// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return 'Hi. My name is ${this.name}';
//   }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting);

