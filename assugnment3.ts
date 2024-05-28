// 문제: Person 인터페이스를 확장하여 Employee 인터페이스를 만드세요.
// Employee는 name, age 속성 외에 salary 속성을 가져야 합니다.
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  salary: number;
}

// 문제: 입력받은 배열의 첫 번째 요소를 반환하는 제네릭 함수를 작성하세요.

function getFirstElement<T>(arr: T[]): T[] {
  return arr;
}
const numArr = getFirstElement<number>([1, 2, 3]);
const strArr = getFirstElement(["a", "b", "c"]);

console.log(typeof numArr);
console.log(typeof strArr);

// 문제: 매개변수가 숫자인지 문자열인지에 따라 다른 처리를 하는 함수를 작성하세요.
function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// 문제: Partial 유틸리티 타입을 사용하여 모든 속성이 선택적인 Todo 타입을 선언하세요.
interface Todo {
  title: string;
  description: string;
}

type PartialTodo = Partial<Todo>;

// 문제: 모든 속성을 읽기 전용으로 변환하는 맵드 타입을 작성하세요.
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = { readonly [K in keyof User]: User[K] };

// 문제: 제네릭 클래스를 작성하고 이를 사용하여 문자열 스택을 만드세요.
class Stack<T> {
  private items: T[] = [];
  push(item: any) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
}

// 문제: T가 string이면 true, 아니면 false를 반환하는 조건부 타입을 작성하세요.
type IsString<T> = T extends string ? true : false;

// 문제: 객체의 키를 반환하는 함수를 작성하세요.
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const obj = getProperty({ name: "John" }, "name");
console.log(obj);

// 문제: Person과 Contact 인터페이스를 결합하는 타입을 선언하세요.
interface Person {
  name: string;
  age: number;
}

interface Contact {
  email: string;
  phone: string;
}

type PersonContact = Person & Contact;

const person2: PersonContact = {
  name: "John",
  age: 30,
  email: "",
  phone: "",
};

// 문제: 입력이 HTMLInputElement인지 확인하고, 그렇다면 value를 반환하는 함수를 작성하세요.
function getInputValue(element: HTMLElement): string | null {
  if (element instanceof HTMLInputElement) {
    return element.value;
  }
  return null;
}
