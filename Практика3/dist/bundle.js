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

/***/ "./scr/index.ts":
/*!**********************!*\
  !*** ./scr/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nclass User {\n    constructor(userName, surname, age) {\n        User.userName = userName;\n        this.age = age;\n        this.surname = surname;\n    }\n    setAge(age) {\n        this.age = age;\n    }\n    getAge() {\n        return this.age;\n    }\n}\n// Проверка доступа к свойствам и методам\n//try {\n//    console.log(userName); // Доступно только внутри класса\n//} catch (error) {\n//    console.error('Ошибка доступа к userName:', error);\n//}\n//try {\n//    const user = new User('John', 'Doe', 30);\n//    console.log(user.surname); // Доступно только внутри класса\n//} catch (error) {\n//    console.error('Ошибка доступа к surname:', error);\n//}\n//try {\n//    const user = new User('John', 'Doe', 30);\n//    console.log(user.age); // Доступно только внутри класса и в наследниках\n//} catch (error) {\n//    console.error('Ошибка доступа к age:', error);\n//}\nconst user = new User('John', 'Doe', 30);\nuser.setAge(31); // Доступно без ограничений\nconsole.log(user.getAge()); // Доступно без ограничений\n// Класс, реализующий интерфейс-наследник\nclass AccountImpl {\n    constructor(id, userName, surname, coins, email, phoneNumber) {\n        this.id = id;\n        this.userName = userName;\n        this.surname = surname;\n        this.coins = coins;\n        this.email = email;\n        this.phoneNumber = phoneNumber;\n        this.created = new Date();\n    }\n    addCoin(amount) {\n        this.coins += amount;\n    }\n    removeCoin(amount) {\n        this.coins -= amount;\n    }\n    getCoins() {\n        return `Количество монет ${this.coins}`;\n    }\n}\n// Создание экземпляра класса\nconst account = new AccountImpl(1, 'Ivan', 'Ivanov', 5, 'ivan@example.com', '+1234567890');\nconsole.log(account.getCoins());\naccount.addCoin(10);\nconsole.log(account.getCoins());\n\n\n//# sourceURL=webpack://pracktic3/./scr/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scr/index.ts"]();
/******/ 	
/******/ })()
;