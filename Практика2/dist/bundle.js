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

eval("\nvar Priority;\n(function (Priority) {\n    Priority[\"LOW\"] = \"low\";\n    Priority[\"MEDIUM\"] = \"medium\";\n    Priority[\"HIGH\"] = \"high\";\n})(Priority || (Priority = {}));\nvar Status;\n(function (Status) {\n    Status[\"ACTIVE\"] = \"active\";\n    Status[\"INACTIVE\"] = \"inactive\";\n})(Status || (Status = {}));\nclass User {\n    constructor() {\n        this.name = '';\n        this.status = Status.ACTIVE;\n        this.todos = [];\n    }\n    changeStatus(newStatus) {\n        this.status = newStatus;\n        console.log(`User status changed to ${newStatus}`);\n    }\n    addTodo(todo, priority = Priority.MEDIUM) {\n        this.todos.push({ todo, priority });\n        console.log(`Todo added: ${todo} (Priority: ${priority})`);\n    }\n    displayTodos() {\n        console.log(`Todos for ${this.name}:`);\n        this.todos.forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));\n    }\n    displayActiveTodos() {\n        console.log(`Active Todos for ${this.name}:`);\n        this.todos\n            .filter(todo => todo.priority !== Priority.HIGH)\n            .forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));\n    }\n}\nconst user = new User();\nuser.name = 'John';\nuser.changeStatus(Status.ACTIVE);\nuser.addTodo('take delivery', Priority.HIGH);\nuser.addTodo('stocktaking', Priority.HIGH);\nuser.addTodo('collect the order');\nuser.addTodo('throw out the trash', Priority.LOW);\nuser.displayTodos();\nuser.displayActiveTodos();\nuser.changeStatus(Status.INACTIVE);\n\n\n//# sourceURL=webpack://webpack/./src/index.ts?");

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