// const fs = require('fs');

// console.log('1:start(sync)');
// setTimeout(() => {
//     console.log('2:callback(setTimeout)');
// }, 2000);

// Promise.resolve().then(() => {
//     console.log('3:callback(Promise)');
// });
// fs.readFile(__filename, () => {
//     console.log('4:callback(fs.readFile)');
// });
// console.log('5:end(sync)');



// console.log('1:start(sync)');

// setTimeout(() => {
//     console.log('2:callback(setTimeout)');
// }, 2000);

// setTimeout(() => {
//     console.log('3:callback(setTimeout-0)');
// }, 0);

// process.nextTick(() => {
//     console.log('4:callback(nextTick)');
// });

// Promise.resolve().then(() => {
//     console.log('5:callback(Promise)');
// });

// console.log('6:end(sync)');



console.log('1:start(sync)');

setTimeout(() => {
    console.log('2:setTimeout(macrotask - timer phase)');
}, 2000);

setTimeout(() => {
    console.log('3:setImmediate(macrotask - check phase)');
}, 0);

process.nextTick(() => {
    console.log('4:process.nextTick(high priority microtask)');
});

Promise.resolve().then(() => {
    console.log('5:Promise(microtask)');
});

console.log('6:end(sync)');







