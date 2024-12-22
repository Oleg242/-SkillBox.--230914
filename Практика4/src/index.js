var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    Stack.prototype.push = function (element) {
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        return this.elements.pop();
    };
    Stack.prototype.peek = function () {
        return this.elements[this.elements.length - 1];
    };
    Stack.prototype.size = function () {
        return this.elements.length;
    };
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    return Stack;
}());
var Hanoi = /** @class */ (function () {
    function Hanoi(n) {
        this.fromStack = new Stack();
        this.toStack = new Stack();
        this.auxStack = new Stack();
        for (var i = n; i > 0; i--) {
            this.fromStack.push(i);
        }
    }
    Hanoi.prototype.move = function (n, from, to, aux) {
        if (n === 1) {
            var disk_1 = from.pop();
            if (disk_1 !== undefined) {
                to.push(disk_1);
                console.log("\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u043E ".concat(disk_1, " \u0441 ").concat(this.getStackName(from), " \u043D\u0430 ").concat(this.getStackName(to)));
            }
            return;
        }
        this.move(n - 1, from, aux, to);
        var disk = from.pop();
        if (disk !== undefined) {
            to.push(disk);
            console.log("\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u043E ".concat(disk, " \u0441 ").concat(this.getStackName(from), " \u043D\u0430 ").concat(this.getStackName(to)));
        }
        this.move(n - 1, aux, to, from);
    };
    Hanoi.prototype.solve = function () {
        var n = this.fromStack.size();
        this.move(n, this.fromStack, this.toStack, this.auxStack);
    };
    Hanoi.prototype.getStackName = function (stack) {
        if (stack === this.fromStack)
            return 'A';
        if (stack === this.toStack)
            return 'C';
        return 'B';
    };
    return Hanoi;
}());
// Демонстрация решения
var hanoi = new Hanoi(3);
hanoi.solve();
function getValue(container) {
    return container.value;
}
// Пример использования
var stringContainer = { value: 'Hello' };
var numberContainer = { value: 42 };
console.log(getValue(stringContainer)); // Выводит: Hello
console.log(getValue(numberContainer)); // Выводит: 42
