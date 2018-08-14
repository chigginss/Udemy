console.log('utils.js is running');

const square = (x) => x*x;

const add = (x,y) => x + y;

// export { square, add };
// export is NOT AN OBJECT DEF
// default export vs nmed export (more than one)

// default export - single export
// do not need to grab default export by name

const subtract = (x, y) => x - y; 

// cannot come before var decleration 
export default subtract

// export { square, add, subtract as default };