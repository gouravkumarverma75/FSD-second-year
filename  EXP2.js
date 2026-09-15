const fs =require('fs');
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File created!');
});
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});
console.log('1: start(sync)');
setTimeout(() => {
    console.log('2: Inside setTimeout(microtask - runs LAST)');
}, 0);
Promise.resolve().then(() => {
    console.log('3: Inside Promise(microtask - runs BEFORE setTimeout)');
});
fs.readFile(__filename, (err, data) => {
    console.log('4: Inside fs.readFile callback (I/O - runs with microtasks)');
});
console.log('5: End(sync)');