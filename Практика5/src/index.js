var car = {
    model: 'Toyota',
    price: 20000,
    dynamic_1: { key_1: 'value_1', key_2: 'value_2' },
    dynamic_2: { key_1: 10, key_2: 20 },
    tuple: ['hello', 42, 'world'],
};
console.log(Object.keys(car)); // Выводит: [ 'model', 'price', 'dynamic_1', 'dynamic_2', 'tuple' ]
console.log(car.tuple); // Выводит: [ 'hello', 42, 'world' ]
// Проверка доступа к свойствам
try {
    console.log(car.dynamic_1.key_3); // Доступно
}
catch (error) {
    console.error('Ошибка доступа к dynamic_1:', error);
}
try {
    console.log(car.dynamic_2.key_3); // Доступно
}
catch (error) {
    console.error('Ошибка доступа к dynamic_2:', error);
}
try {
    console.log(car.tuple[0]); // Доступно
}
catch (error) {
    console.error('Ошибка доступа к tuple:', error);
}
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
}
console.log(add(10, 20)); // Выводит: 30
console.log(add('hello', 'world')); // Выводит: helloworld
console.log(add('hello', 42)); // Выводит: hello42
console.log(add(10, 'world')); // Выводит: 10world
var partialCar = { model: 'Toyota' }; // Допустимо
var requiredCar = {
    model: 'Toyota',
    price: 20000,
    dynamic_1: { key_1: 'value_1' },
    dynamic_2: { key_1: 10 },
    tuple: ['hello', 42, 'world'],
}; // Допустимо
var readonlyCar = {
    model: 'Toyota',
    price: 20000,
    dynamic_1: { key_1: 'value_1' },
    dynamic_2: { key_1: 10 },
    tuple: ['hello', 42, 'world'],
};
var pickedCar = { model: 'Toyota', price: 20000 }; // Допустимо
var omittedCar = {
    dynamic_1: { key_1: 'value_1' },
    dynamic_2: { key_1: 10 },
    tuple: ['hello', 42, 'world'],
}; // Допустимо
console.log(partialCar);
console.log(requiredCar);
console.log(readonlyCar);
console.log(pickedCar);
console.log(omittedCar);
