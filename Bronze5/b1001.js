const filepath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs').readFileSync(__dirname + filepath).toString().trim().split(' ');

console.log(parseInt(input[0]) - parseInt(input[1]));
