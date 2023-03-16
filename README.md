# Node.js로 백준(BOJ) 문제 풀 때 유의할 점들 #


 백준에서 Node.js로 입력을 받는 방법은 크게 두 가지가 있다. 첫 번째는 readline 모듈을 사용하는 것이고, 
두 번째는 fs모듈을 사용하는 것이다. 

 Python으로 백준 문제를 풀 때 시간 초과가 나는 것을 막기 위해 input() 대신 sys.stdin.readline()을 
쓰는 것처럼, Node.js도 readline 모듈보다 fs 모듈을 사용하는 것이 더 빠르다.

``` javascript
// 백준 1000번 문제 풀이
const filepath = process.platform ==='linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(__dirname + filepath).toString().trim().split(' ');
console.log(parseInt(input[0]) + parseInt(input[1]));
```

 FileSystem의 약자인 fs 모듈은 파일 처리를 하는 모듈로, 직접 입력 파일을 읽어와서 처리한다. 
 1. 외부 모듈을 가져오는 require을 통해 Node에 내장된 fs 모듈을 가져온다.
 2. fs 모듈의 메서드이며 동기식인 readFileSync() 메서드를 통해 상대 경로 or 절대 경로에 있는 파일 속 콘솔로 입력받고 배열로 저장된 Buffer를 읽어옵니다.
 3. 읽어온 데이터의 타입은 문자열이 아닌 Buffer 객체이기 때문에 인코딩을 위해 toString()를 실행한다.
 4. trim() 메서드를 통해 모든 공백문자와 개행문자를 제거하여 공백문자와 개행문자가 배열에 반환되는 것을 방지한다.
 5. split(' ')을 통해 공백으로 구분된 한 줄의 값을 받을 수 있다.
 
 readFileSync의 인수 값 즉, 파라미터 값은 파일 경로이다. 백준 공식 홈페이지가 사용하는 유닉스 기반의 os를 사용하기 때문에 '/dev/stdin'을 읽어주면 터미널 상에서 
입력받을 수 있다. 하지만 내 로컬 os인 윈도우에서는 불가능하다. 그래서 위에 process.platform ==='linux' ? '/dev/stdin' : './input.txt'을 통해 두 가지 경우로 
나뉘어 경로 지정을 한다. 백준 공식 홈페이지에서 제공하는 입력받아와야 할 파일 경로가 '/dev/stdin'이기 때문에 참일때 사용하게 한다. 반대로 로컬에서도 사용하기 위해서
거짓일때 즉, linux환경이 아닐 때 내 상대 경로를 사용하면 된다. __dirname은 현재 파일 위치를 뜻한다. 


<위 코드를 통해 우리가 활용할 수 있는 입출력 코드>
``` javascript
// 1. 하나의 값을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// 3. 여러 줄의 값들을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
```


2023-03-16 b1000 완료