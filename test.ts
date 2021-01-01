// Union types(複数型定義）
let message :string | null = 'こんにちは！'
message = null
console.log(message);

let number1: number[] = [ 1,2,3 ];
let number2: Array<number> = [ 1,2,3 ];
let list: [number, string, number] = [
  1, 'hoge', 2
]

let user: User = {
  id: 1,
  name: '三浦航平',
  age: 25
}

// typeでも可能
interface User {
  id: number
  name: string
  age?: number
}

// 関数
function sum(num1: number, num2: number): string {
  const sum: number = num1 + num2;
  return '${num1} + ${num2} は、${sum}です。';
}

sum(3, 5)

class Calc {
  private num1: number;
  private num2: number;
  constructor (num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  public sum(): string {
    const sum: number = this.num1 + this.num2;
    return '${this.num1} + ${this.num2} は、${sum} です。';
  }
}

const calc = new Calc(5,6)
calc.sum

class Test {
  private _type: string;

  constructor(type: string) {
    this._type = type;
  }

  set type(type: string) {
    this._type = type;
  }

  get type(): string {
    return this._type;
  }
}

const test = new Test('test');
test.type = 'test2';
test.type;

// 列挙型
enum Role {
  Admin,
  Master,
  Editor,
  User
};
Role.Editor; // 2

// ジェネリクス
function genericsTest<T>(type: T) :T {
  return type;
}
genericsTest<string>('ああ')

function genericsTest<T, K>(type: T, key: K) :string {
  return '${type} + ${key}'
}
genericsTest<string, number>('test', 100);

interface GenericsTest<T> {
  value: T
  title: string
}

const test1: GenericsTest<number> = {
  value: 100,
  title: 'ジェネリクステスト'
}

const test2: GenericsTest<string> = {
  value: '100',
  title: 'ジェネリクステスト２'
}