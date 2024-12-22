class Stack<T> {
    private elements: T[];

    constructor() {
        this.elements = [];
    }

    push(element: T): void {
        this.elements.push(element);
    }

    pop(): T | undefined {
        return this.elements.pop();
    }

    peek(): T | undefined {
        return this.elements[this.elements.length - 1];
    }

    size(): number {
        return this.elements.length;
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }
}

class Hanoi {
    private fromStack: Stack<number>;
    private toStack: Stack<number>;
    private auxStack: Stack<number>;

    constructor(n: number) {
        this.fromStack = new Stack<number>();
        this.toStack = new Stack<number>();
        this.auxStack = new Stack<number>();

        for (let i = n; i > 0; i--) {
            this.fromStack.push(i);
        }
    }

    move(n: number, from: Stack<number>, to: Stack<number>, aux: Stack<number>): void {
        if (n === 1) {
            const disk = from.pop();
            if (disk !== undefined) {
                to.push(disk);
                console.log(`Перемещено ${disk} с ${this.getStackName(from)} на ${this.getStackName(to)}`);
            }
            return;
        }

        this.move(n - 1, from, aux, to);
        const disk = from.pop();
        if (disk !== undefined) {
            to.push(disk);
            console.log(`Перемещено ${disk} с ${this.getStackName(from)} на ${this.getStackName(to)}`);
        }
        this.move(n - 1, aux, to, from);
    }

    solve(): void {
        const n = this.fromStack.size();
        this.move(n, this.fromStack, this.toStack, this.auxStack);
    }

    private getStackName(stack: Stack<number>): string {
        if (stack === this.fromStack) return 'A';
        if (stack === this.toStack) return 'C';
        return 'B';
    }
}

// Демонстрация решения
const hanoi = new Hanoi(3);
hanoi.solve();

interface Container<T> {
    value: T;
}

function getValue<T>(container: Container<T>): T {
    return container.value;
}

// Пример использования
const stringContainer: Container<string> = { value: 'Hello' };
const numberContainer: Container<number> = { value: 42 };

console.log(getValue(stringContainer)); // Выводит: Hello
console.log(getValue(numberContainer)); // Выводит: 42
