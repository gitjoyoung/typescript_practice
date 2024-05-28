// 문제: 아래 변수를 타입스크립트로 선언하시오.
// let age = 30;
// let name = "John";
// let isStudent = true;

let age: number = 30;
let nameEx: string = "John";
let isStudent: boolean = true;

// 문제: 숫자 배열을 타입스크립트로 선언하시오.
let numbers: number[] = [1, 2, 3, 4, 5];

// 문제: 이름과 나이를 담는 튜플을 선언하시오.
let person: [string, number];
person = ["John", 30];

// 문제: 이름과 나이를 속성으로 가지는 객체를 타입스크립트로 선언하시오.
let user: { name: string; age: number } = { name: "Bob", age: 30 };

// 문제: 두 숫자를 더하는 함수의 타입을 지정하시오.
function add(a: number, b: number): number {
  return a + b;
}

// 문제: 문자열 또는 숫자를 받을 수 있는 변수를 선언하시오.
let value: string | number;

// 문제: 문자열 또는 숫자를 받을 수 있는 타입 별칭을 선언하고 이를 사용하는 변수를 만드시오.
type StringOrNumber = string | number;
let id: StringOrNumber;
id = 123;
id = "123";

// 문제: 이름과 나이를 속성으로 가지는 인터페이스를 선언하시오.
interface Person {
  name: string;
  age: number;
}
let person1: Person = { name: "asd", age: 30 };

// 문제: 변수의 타입을 문자열로 단언하시오.
let someValue: any = "this is a string";
let strLength: number;

strLength = (someValue as string).length;
console.log(strLength);

// 문제: null 또는 undefined를 받을 수 있는 변수를 선언하시오.
let nullableValue: null | undefined;
