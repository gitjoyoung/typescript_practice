// 문제 1:
// 다음 함수의 타입을 지정하세요.
// 1. 함수의 이름은 `greet`입니다.
// 2. 함수는 하나의 매개변수를 받습니다:
//    - 매개변수는 문자열 타입의 `name`입니다.
// 3. 함수는 문자열을 반환하며, 형식은 `Hello, {name}!`입니다.

function greet(
  name: string /* 여기에 매개변수와 반환값의 타입을 지정하세요 */
): string {
  return `Hello, ${name}!`;
}

// 문제 2:
// 다음 객체의 타입을 지정하세요.
// 1. 객체의 이름은 `user`입니다.
// 2. 객체는 다음의 속성을 가집니다:
//    - `id`: 숫자 타입
//    - `name`: 문자열 타입
//    - `email`: 문자열 타입

const user2: { id: number; name: string; email: string } = {
  id: 1 /* 여기에 타입을 지정하세요 */,
  name: "name" /* 여기에 타입을 지정하세요 */,
  email: "email" /* 여기에 타입을 지정하세요 */,
};

// 문제 3:
// 다음 함수의 타입을 지정하세요.
// 1. 함수의 이름은 `multiply`입니다.
// 2. 함수는 두 개의 매개변수를 받습니다:
//    - `a`: 숫자 타입
//    - `b`: 숫자 타입
// 3. 함수는 두 숫자의 곱을 반환합니다.

function multiply(a: number, b: number): number {
  return a * b;
}

// 문제 4:
// 다음 함수의 타입을 지정하세요.
// 1. 함수의 이름은 `isEven`입니다.
// 2. 함수는 하나의 매개변수를 받습니다:
//    - `num`: 숫자 타입
// 3. 함수는 주어진 숫자가 짝수인지 여부를 나타내는 boolean 값을 반환합니다.

function isEven(num: number): boolean {
  return num % 2 === 0;
}

// 문제 5:
// 다음 함수의 타입을 지정하세요.
// 1. 함수의 이름은 `toUpperCase`입니다.
// 2. 함수는 하나의 매개변수를 받습니다:
//    - `str`: 문자열 타입
// 3. 함수는 주어진 문자열을 대문자로 변환하여 반환합니다.

function toUpperCase(str: string): string {
  return str.toUpperCase();
}

// 문제 6:
// 다음 함수의 타입을 지정하세요.
// 1. 함수의 이름은 `getLength`입니다.
// 2. 함수는 하나의 매개변수를 받습니다:
//    - `arr`: 임의의 타입 요소를 가진 배열
// 3. 함수는 배열의 길이를 반환합니다.

function getLength<T>(arr: T[]): number {
  return arr.length;
}

// 문제 7:
// 다음 함수의 타입을 지정하세요.
// 1. 함수의 이름은 `getFirstElement`입니다.
// 2. 함수는 하나의 매개변수를 받습니다:
//    - `arr`: 문자열 타입 요소를 가진 배열
// 3. 함수는 배열의 첫 번째 요소를 반환합니다.

function getFirstElement2(arr: string[]): string {
  return arr[0];
}

// 문제 8:
// 다음 함수의 타입을 지정하세요.
// 1. 함수의 이름은 `concatStrings`입니다.
// 2. 함수는 두 개의 매개변수를 받습니다:
//    - `str1`: 문자열 타입
//    - `str2`: 문자열 타입
// 3. 함수는 두 문자열을 연결하여 반환합니다.

function concatStrings(str1: string, str2: string): string {
  return str1 + str2;
}

// 문제 9:
// 다음 함수의 타입을 지정하세요.
// 1. 함수의 이름은 `reverseArray`입니다.
// 2. 함수는 하나의 매개변수를 받습니다:
//    - `arr`: 임의의 타입 요소를 가진 배열
// 3. 함수는 배열의 요소 순서를 뒤집어 반환합니다.

function reverseArray<A>(arr: A[]): A[] {
  return arr.reverse();
}
const a = reverseArray<number>([1, 2, 3]);
console.log(a);

// 문제 10:
// 다음 함수의 타입을 지정하세요.
// 1. 함수의 이름은 `findMax`입니다.
// 2. 함수는 하나의 매개변수를 받습니다:
//    - `numbers`: 숫자 타입 요소를 가진 배열
// 3. 함수는 배열의 가장 큰 숫자를 반환합니다.

function findMax(number: number[]): number {
  return Math.max(...number);
}
