import {
    action, makeObservable, observable,
    runInAction,
} from 'mobx';

export interface TodoListItem {
    id:number,
    text:string,
    isDone:boolean,
}

export type TodoRenderType = 'ALL' | 'ACTIVE' | 'COMPLETED';

export class TodoListStore {
    itemList: TodoListItem[] = [];

    todoRenderType: TodoRenderType = 'ALL';

    currentIdTodoListItem: number | null = null;

    title: string = '';

    id: number = 0;

    addTodo = (newItem: TodoListItem): void => {
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

    constructor(title: string) {
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
        runInAction(() => {
            this.title = title;
            this.id = Math.random();
        });
    }
}
