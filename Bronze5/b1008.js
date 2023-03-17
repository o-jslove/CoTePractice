const filepath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs').readFileSync(__dirname + filepath).toString().trim().split(' ');

console.log(Number(input[0]) / Number(input[1]));