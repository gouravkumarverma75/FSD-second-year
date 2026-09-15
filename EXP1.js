//experimnet 1.1

// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();
// myEmitter.on('greet', (name) => {
//     console.log(`Hello, ${name}! Welcome to node.js.`);
// });
// myEmitter.on('exit', () => {
//     console.log("application closed");
// });
// myEmitter.emit('greet', 'Gaurav kumar');
// myEmitter.emit('exit');


//experimnet 1.2
// const EventEmitter = require('events');

// class Button extends EventEmitter {
    
// }

// const button = new Button();
// button.on('click', () => {
//     console.log('Button clicked!');
// });
// button.on('mouseover',() => {
//     console.log('Mouse is over the button!');
// });
// button.emit('click');
// button.emit('mouseover');


//experimnet 1.3
console.log('Start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

setImmediate(() => {
    console.log('setImmediate');
});

process.nextTick(() => {
    console.log('process.nextTick');
});

console.log('End');