import "./styles.css";

// import & export
// 1. ./ : 현재폴더
// 2. import 방식
//  1) css : import "./addFunc";
//  2) js : import {불러올 함수이름} from "./불러올 파일이름.js"
//          js 안에서 js 불러올 때는 .js 안써도됨
// 3. import 하려면 불러올 파일에서 export 해줘야함
// import {addNumber} from "./addFunc"

// 4. export 1개만 한 경우에는 불러올 함수 이름에 { } 안 적어도됨
// import AAA from "./addFunc"

// 5. 불러올 함수는 export 순서와 상관없이 이름만 동일하면 됨
//import {addNumber, minusNumber} from "./addFunc"

// console.log(addNumber(1, 2));
// console.log(minusNumber(1, 2));

// 6. 불러올 변수는 알아보기 쉽게 별칭 지정 가능
//import {a as ALIAS, addNumber, minusNumber} from "./addFunc"

// 7. 전체 함수를 불러올 경우에는 * 사용
//    어떤 함수(변수)를 가져올지 모르므로 별칭 지정해줘야함
import * as ALIAS from "./addFunc"

const a = 2;

console.log(ALIAS.addNumber(1, 2));
console.log(ALIAS.minusNumber(1, 2));
console.log(ALIAS.a);


