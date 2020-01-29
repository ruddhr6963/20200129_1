const addNumber = (a, b) => a + b;
const minusNumber = (a, b) => a - b;

// export 방법
// 1. 보통 한꺼번에 export함
export {addNumber, minusNumber};

// 2. 바로 export 가능
// export minusNumber = (a, b) => a - b;

// 3. 변수도 export 가능
export const a = 1;

export function sss( a ) {
  return a;
}

// 4. 딱 1개만 export할 경우 default 사용
// export default addNumber;