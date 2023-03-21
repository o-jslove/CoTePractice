const filepath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs').readFileSync(__dirname + filepath).toString().trim().split(' ').map(Number);
let result = input[0] + input[1] + '\n';
result += input[0] - input[1] + '\n';
result += input[0] * input[1] + '\n';
result += Math.floor(input[0] / input[1]) + '\n';
result += input[0] % input[1];
console.log(result)