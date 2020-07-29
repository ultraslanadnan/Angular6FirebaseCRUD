
export class Model {
    user;
    items;

    constructor() {
        this.user = 'Adnan';
        this.items = [
            new TodoItem('Spor', false),
            new TodoItem('Spor', false),
            new TodoItem('Spor', false),
            new TodoItem('Spor', false),
          ];
    }
}
export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;

    }
}
