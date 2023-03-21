const filepath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs').readFileSync(__dirname + filepath).toString().trim().split(' ').map(Number);
console.log(input[0] * input[1]);