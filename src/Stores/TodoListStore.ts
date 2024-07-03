import {
    makeAutoObservable,
    runInAction,
} from 'mobx';

export interface TodoListItem {
    id:number,
    text:string,
    isDone:boolean,
}

export type TodoListStoreType = {
    title: string,
    itemList: TodoListItem[],
    todoRenderType: TodoRenderType,
    currentIdTodoListItem: number | null,
    id: number,
};

export type TodoRenderType = 'ALL' | 'ACTIVE' | 'COMPLETED';

export class TodoListStore {
    title: string = '';

    itemList: TodoListItem[] = [];

    todoRenderType: TodoRenderType = 'ALL';

    currentIdTodoListItem: number | null = null;

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

    toJSON():TodoListStoreType {
        return {
            title: this.title,
            itemList: this.itemList,
            todoRenderType: this.todoRenderType,
            currentIdTodoListItem: this.currentIdTodoListItem,
            id: this.id,
        };
    }

    static fromJSON(json:TodoListStoreType): TodoListStore {
        return new TodoListStore(json.title,
            json.itemList,
            json.todoRenderType,
            json.currentIdTodoListItem,
            json.id);
    }

    constructor(title: string = '',
        itemList: TodoListItem[] = [],
        todoRenderType: TodoRenderType = 'ALL',
        currentIdTodoListItem: number | null = null,
        id: number = 0) {
        makeAutoObservable(this);
        runInAction(() => {
            this.title = title;
            this.itemList = itemList;
            this.todoRenderType = todoRenderType;
            this.currentIdTodoListItem = currentIdTodoListItem;
            if (id !== 0) this.id = id;
            else this.id = Math.random();
        });
    }
}
