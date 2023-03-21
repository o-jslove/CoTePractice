const filepath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs').readFileSync(__dirname + filepath).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

if(a > b) {
    console.log('>');
} else if(a < b) {
    console.log('<');
} else {
    console.log('==');
};