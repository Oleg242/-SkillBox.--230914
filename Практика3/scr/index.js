var User = /** @class */ (function () {
    function User(userName, surname, age) {
        User.userName = userName;
        this.age = age;
        this.surname = surname;
    }
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
// Проверка доступа к свойствам и методам
//try {
//    console.log(userName); // Доступно только внутри класса
//} catch (error) {
//    console.error('Ошибка доступа к userName:', error);
//}
//try {
//    const user = new User('John', 'Doe', 30);
//    console.log(user.surname); // Доступно только внутри класса
//} catch (error) {
//    console.error('Ошибка доступа к surname:', error);
//}
//try {
//    const user = new User('John', 'Doe', 30);
//    console.log(user.age); // Доступно только внутри класса и в наследниках
//} catch (error) {
//    console.error('Ошибка доступа к age:', error);
//}
var user = new User('John', 'Doe', 30);
user.setAge(31); // Доступно без ограничений
console.log(user.getAge()); // Доступно без ограничений
// Класс, реализующий интерфейс-наследник
var AccountImpl = /** @class */ (function () {
    function AccountImpl(id, userName, surname, coins, email, phoneNumber) {
        this.id = id;
        this.userName = userName;
        this.surname = surname;
        this.coins = coins;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.created = new Date();
    }
    AccountImpl.prototype.addCoin = function (amount) {
        this.coins += amount;
    };
    AccountImpl.prototype.removeCoin = function (amount) {
        this.coins -= amount;
    };
    AccountImpl.prototype.getCoins = function () {
        return "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u043E\u043D\u0435\u0442 ".concat(this.coins);
    };
    return AccountImpl;
}());
// Создание экземпляра класса
var account = new AccountImpl(1, 'Ivan', 'Ivanov', 5, 'ivan@example.com', '+1234567890');
console.log(account.getCoins());
account.addCoin(10);
console.log(account.getCoins());
