// 문제 1: 문자열 타입
// 이름을 매개변수로 받아서 "Hello, [이름]!" 형식의 문자열을 반환하는 함수를 작성하세요.
// typescript
// 코드 복사
function greet(name: string): string {
  // 코드 작성
}
// 문제 2: 숫자 타입
// 반지름을 매개변수로 받아서 원의 면적을 계산하여 반환하는 함수를 작성하세요. 면적은 π * 반지름^2 로 계산됩니다.
// typescript
// 코드 복사
function calculateCircleArea(radius: number): number {
  // 코드 작성
}
// 문제 3: 불리언 타입
// 숫자를 매개변수로 받아서 그 숫자가 짝수이면 true, 홀수이면 false를 반환하는 함수를 작성하세요.
// typescript
// 코드 복사
function isEven(num: number): boolean {
  return num % 2 === 0;
  // 코드 작성
}
// 문제 4: 배열 타입
// 숫자 배열을 매개변수로 받아서 그 배열의 모든 요소를 더한 값을 반환하는 함수를 작성하세요.
// typescript
// 코드 복사
function sumArray(numbers: number[]): number {
  // 코드 작성
}
// 문제 5: 객체 타입
// 학생의 이름과 나이를 포함하는 객체를 매개변수로 받아서 "학생 이름: [이름], 나이: [나이]" 형식의 문자열을 반환하는 함수를 작성하세요.
// typescript
// 코드 복사
interface Student {
  name: string;
  age: number;
}

function getStudentInfo(student: Student): string {
  // 코드 작성
}
