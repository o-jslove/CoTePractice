const filepath = process.platform ==='linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().split(' ');

console.log(parseInt(input[0]) + parseInt(input[1]));
