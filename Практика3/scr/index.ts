class User {
    static userName: string;
    private surname: string;
    protected age: number;

    constructor(userName: string, surname: string, age: number) {
        User.userName = userName;
        this.age = age;
        this.surname = surname;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }
}

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

const user = new User('John', 'Doe', 30);
user.setAge(31); // Доступно без ограничений
console.log(user.getAge()); // Доступно без ограничений

// Базовый интерфейс
interface Account {
    id: number;
    userName: string;
    surname: string;
    coins: number;
    age?: number; // Необязательное свойство
    readonly created: Date; // Свойство только для чтения
    addCoin(amount: number): void;
    removeCoin(amount: number): void;
    getCoins(): string;
}

// Расширенный интерфейс
interface ExtendedAccount extends Account {
    email: string;
}

// Интерфейс-наследник
interface AdvancedAccount extends ExtendedAccount {
    phoneNumber: string;
}

// Класс, реализующий интерфейс-наследник
class AccountImpl implements AdvancedAccount {
    id: number;
    userName: string;
    surname: string;
    coins: number;
    age?: number;
    readonly created: Date;
    email: string;
    phoneNumber: string;

    constructor(id: number, userName: string, surname: string, coins: number, email: string, phoneNumber: string) {
        this.id = id;
        this.userName = userName;
        this.surname = surname;
        this.coins = coins;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.created = new Date();
    }

    addCoin(amount: number): void {
        this.coins += amount;
    }

    removeCoin(amount: number): void {
        this.coins -= amount;
    }

    getCoins(): string {
        return `Количество монет ${this.coins}`;
    }
}

// Создание экземпляра класса
const account = new AccountImpl(1, 'Ivan', 'Ivanov', 5, 'ivan@example.com', '+1234567890');
console.log(account.getCoins());
account.addCoin(10);
console.log(account.getCoins());
