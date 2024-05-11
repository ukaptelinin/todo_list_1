import {
    action, autorun, makeObservable, observable,
} from 'mobx';

export const AMOUNT = 5;
export const PAGE: string = 'page';

export interface TodoItem {
    id:number,
    text:string,
    isDone:boolean,
}

export type TodoRenderType = 'ALL' | 'ACTIVE' | 'COMPLETED';

class TodoListStore {
    itemList: TodoItem[] = [];

    todoRenderType: TodoRenderType = 'ALL';

    currentIdTodoListItem: number | null = null;

    addTodo = (newItem: TodoItem): void => {
        this.itemList.push(newItem);
    };

    toggleDone = (itemId: number): void => {
        this.itemList = this.itemList.map((listItem) => {
            if (listItem.id === itemId) {
                return { ...listItem, isDone: !listItem.isDone };
            }
            return listItem;
        });
    };

    deleteTodo = (itemId: number): void => {
        this.itemList = this.itemList.filter((listItem) => listItem.id !== itemId);
    };

    editTodo = (itemId: number, text: string): void => {
        this.itemList = this.itemList.map((listItem) => {
            if (listItem.id === itemId) {
                return { ...listItem, text };
            }
            return listItem;
        });
    };

    todoClearCompleted = (): void => {
        this.itemList = this.itemList.filter((itemList) => !itemList.isDone);
    };

    toggleRenderType = (type: TodoRenderType): void => {
        this.todoRenderType = type;
    };

    changeCurrentIdTodoListItem = (itemId: number | null): void => {
        this.currentIdTodoListItem = itemId;
    };

    constructor() {
        makeObservable(this, {
            itemList: observable,
            todoRenderType: observable,
            currentIdTodoListItem: observable,
            addTodo: action,
            toggleDone: action,
            deleteTodo: action,
            editTodo: action,
            todoClearCompleted: action,
            toggleRenderType: action,
            changeCurrentIdTodoListItem: action,
        });
        const raw = localStorage.getItem('todolist') as string || '[]';
        this.itemList = (JSON.parse(raw));
    }
}

const todoListStore = new TodoListStore();

autorun(() => {
    localStorage.setItem('todolist', JSON.stringify(todoListStore.itemList));
});

export default todoListStore;
