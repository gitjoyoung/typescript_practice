const srt: string = "";
const num: number = 2;
const bool: boolean = true;
const nullable: null = null;

const unde: undefined = undefined;
const obj: object = {};
const obj2: { name: string } = { name: "name" };

const arr: Array<any> = [1, 2, 3];
const arr2: Array<string> = ["name"];
const arr3: Array<number> = [1, 2, 3];
const arr4: Array<[]> = [[], [], []];

const arr5: [] = [];
const arr6: (string | number)[] = [];

const fn: (a: string) => string = function (a: string): string {
  return a;
};

type Tsum = (a: number, b: number) => number;
const sumFn: Tsum = (a: number, b: number) => {
  return a;
};

// 여러가지 타입
type Tstring = string[] | null;
const nullData: Tstring = null;
type TGe = "male" | "female";
