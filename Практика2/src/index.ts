enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}

enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}

class User {
    name: string;
    status: Status;
    todos: { todo: string; priority: Priority }[];

    constructor() {
        this.name = '';
        this.status = Status.ACTIVE;
        this.todos = [];
    }

    changeStatus(newStatus: Status) {
        this.status = newStatus;
        console.log(`User status changed to ${newStatus}`);
    }

    addTodo(todo: string, priority: Priority = Priority.MEDIUM) {
        this.todos.push({ todo, priority });
        console.log(`Todo added: ${todo} (Priority: ${priority})`);
    }

    displayTodos() {
        console.log(`Todos for ${this.name}:`);
        this.todos.forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));
    }

    displayActiveTodos() {
        console.log(`Active Todos for ${this.name}:`);
        this.todos
            .filter(todo => todo.priority !== Priority.HIGH)
            .forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));
    }
}

const user = new User();
user.name = 'John';
user.changeStatus(Status.ACTIVE);
user.addTodo('take delivery', Priority.HIGH);
user.addTodo('stocktaking', Priority.HIGH);
user.addTodo('collect the order');
user.addTodo('throw out the trash', Priority.LOW);
user.displayTodos();
user.displayActiveTodos();
user.changeStatus(Status.INACTIVE);
