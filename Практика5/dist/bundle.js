/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nconst car = {\n    model: 'Toyota',\n    price: 20000,\n    dynamic_1: { key_1: 'value_1', key_2: 'value_2' },\n    dynamic_2: { key_1: 10, key_2: 20 },\n    tuple: ['hello', 42, 'world'],\n};\nconsole.log(Object.keys(car)); // Выводит: [ 'model', 'price', 'dynamic_1', 'dynamic_2', 'tuple' ]\nconsole.log(car.tuple); // Выводит: [ 'hello', 42, 'world' ]\n// Проверка доступа к свойствам\ntry {\n    console.log(car.dynamic_1.key_3); // Доступно\n}\ncatch (error) {\n    console.error('Ошибка доступа к dynamic_1:', error);\n}\ntry {\n    console.log(car.dynamic_2.key_3); // Доступно\n}\ncatch (error) {\n    console.error('Ошибка доступа к dynamic_2:', error);\n}\ntry {\n    console.log(car.tuple[0]); // Доступно\n}\ncatch (error) {\n    console.error('Ошибка доступа к tuple:', error);\n}\nfunction add(a, b) {\n    if (typeof a === 'number' && typeof b === 'number') {\n        return a + b;\n    }\n    else {\n        return String(a) + String(b);\n    }\n}\nconsole.log(add(10, 20)); // Выводит: 30\nconsole.log(add('hello', 'world')); // Выводит: helloworld\nconsole.log(add('hello', 42)); // Выводит: hello42\nconsole.log(add(10, 'world')); // Выводит: 10world\nconst partialCar = { model: 'Toyota' }; // Допустимо\nconst requiredCar = {\n    model: 'Toyota',\n    price: 20000,\n    dynamic_1: { key_1: 'value_1' },\n    dynamic_2: { key_1: 10 },\n    tuple: ['hello', 42, 'world'],\n}; // Допустимо\nconst readonlyCar = {\n    model: 'Toyota',\n    price: 20000,\n    dynamic_1: { key_1: 'value_1' },\n    dynamic_2: { key_1: 10 },\n    tuple: ['hello', 42, 'world'],\n};\nconst pickedCar = { model: 'Toyota', price: 20000 }; // Допустимо\nconst omittedCar = {\n    dynamic_1: { key_1: 'value_1' },\n    dynamic_2: { key_1: 10 },\n    tuple: ['hello', 42, 'world'],\n}; // Допустимо\nconsole.log(partialCar);\nconsole.log(requiredCar);\nconsole.log(readonlyCar);\nconsole.log(pickedCar);\nconsole.log(omittedCar);\n\n\n//# sourceURL=webpack://practika5/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;