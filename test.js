"use strict";
// Union types(複数型定義）
var message = 'こんにちは！';
message = null;
console.log(message);
var number1 = [1, 2, 3];
var number2 = [1, 2, 3];
var list = [
    1, 'hoge', 2
];
var user = {
    id: 1,
    name: '三浦航平',
    age: 25
};
// 関数
function sum(num1, num2) {
    var sum = num1 + num2;
    return '${num1} + ${num2} は、${sum}です。';
}
sum(3, 5);
var Calc = /** @class */ (function () {
    function Calc(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calc.prototype.sum = function () {
        var sum = this.num1 + this.num2;
        return '${this.num1} + ${this.num2} は、${sum} です。';
    };
    return Calc;
}());
var calc = new Calc(5, 6);
calc.sum;
var Test = /** @class */ (function () {
    function Test(type) {
        this._type = type;
    }
    Object.defineProperty(Test.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    return Test;
}());
var test = new Test('test');
test.type = 'test2';
test.type;
// 列挙型
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Master"] = 1] = "Master";
    Role[Role["Editor"] = 2] = "Editor";
    Role[Role["User"] = 3] = "User";
})(Role || (Role = {}));
;
Role.Editor; // 2
// ジェネリクス
function genericsTest(type) {
    return type;
}
genericsTest('ああ');
