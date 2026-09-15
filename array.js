const numbers = [1,2,3,4,5];

const doubled = numbers.map(n => n*2);
const even = numbers.filter(n => n%2 === 0);
const sum = numbers.reduce((total,n) =>  total + n, 0);

console.log(doubled);
console.log(even);
console.log(sum);
