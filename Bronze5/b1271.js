const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = fs.readFileSync(__dirname + filepath).toString().trim().split(" ").map(BigInt);
let answer = input[0] / input[1] + '\n';
answer += input[0] % input[1];
console.log(answer);