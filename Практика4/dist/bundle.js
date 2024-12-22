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

eval("\nclass Stack {\n    constructor() {\n        this.elements = [];\n    }\n    push(element) {\n        this.elements.push(element);\n    }\n    pop() {\n        return this.elements.pop();\n    }\n    peek() {\n        return this.elements[this.elements.length - 1];\n    }\n    size() {\n        return this.elements.length;\n    }\n    isEmpty() {\n        return this.elements.length === 0;\n    }\n}\nclass Hanoi {\n    constructor(n) {\n        this.fromStack = new Stack();\n        this.toStack = new Stack();\n        this.auxStack = new Stack();\n        for (let i = n; i > 0; i--) {\n            this.fromStack.push(i);\n        }\n    }\n    move(n, from, to, aux) {\n        if (n === 1) {\n            const disk = from.pop();\n            if (disk !== undefined) {\n                to.push(disk);\n                console.log(`Перемещено ${disk} с ${this.getStackName(from)} на ${this.getStackName(to)}`);\n            }\n            return;\n        }\n        this.move(n - 1, from, aux, to);\n        const disk = from.pop();\n        if (disk !== undefined) {\n            to.push(disk);\n            console.log(`Перемещено ${disk} с ${this.getStackName(from)} на ${this.getStackName(to)}`);\n        }\n        this.move(n - 1, aux, to, from);\n    }\n    solve() {\n        const n = this.fromStack.size();\n        this.move(n, this.fromStack, this.toStack, this.auxStack);\n    }\n    getStackName(stack) {\n        if (stack === this.fromStack)\n            return 'A';\n        if (stack === this.toStack)\n            return 'C';\n        return 'B';\n    }\n}\n// Демонстрация решения\nconst hanoi = new Hanoi(3);\nhanoi.solve();\nfunction getValue(container) {\n    return container.value;\n}\n// Пример использования\nconst stringContainer = { value: 'Hello' };\nconst numberContainer = { value: 42 };\nconsole.log(getValue(stringContainer)); // Выводит: Hello\nconsole.log(getValue(numberContainer)); // Выводит: 42\n\n\n//# sourceURL=webpack://practika4/./src/index.ts?");

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