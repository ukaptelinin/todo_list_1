import { makeAutoObservable, runInAction } from 'mobx';
import { RefObject } from 'react';

export interface TodoListItem {
    id: number;
    text: string;
    isDone: boolean;
    priority: TodoListPriorityType;
}

export interface TodoListItemProps {
    id: number;
    text: string;
    isDone: boolean;
    priority: TodoListPriorityType;
    index: number;
    moveItem: (dragIndex: number, hoverIndex: number) => void;
}

export interface TodoListItemElementProps {
    id: number;
    text: string;
    isDone: boolean;
    priority: TodoListPriorityType;
    dragRef: RefObject<HTMLButtonElement>;
    onPointerDown: (event: React.PointerEvent) => void;
}

export type TodoListStoreType = {
    title: string;
    itemList: TodoListItem[];
    todoRenderType: TodoRenderType;
    currentIdTodoListItem: number | null;
    id: number;
};

export type TodoRenderType = 'ALL' | 'ACTIVE' | 'COMPLETED';
export type TodoListPriorityType = 'HIGH' | 'MEDIUM' | 'LOW' | 'NONE';

const PRIORITY_ARRAY: TodoListPriorityType[] = [
    'HIGH',
    'MEDIUM',
    'LOW',
    'NONE',
];

export class TodoListStore {
    title: string = '';

    itemList: TodoListItem[] = [];

    todoRenderType: TodoRenderType = 'ALL';

    currentIdTodoListItem: number | null = null;

    id: number = 0;

    addTodo = (newItem: TodoListItem): void => {
        const insertIndex = this.itemList.findIndex(
            (item) =>
                PRIORITY_ARRAY.indexOf(newItem.priority) <
                PRIORITY_ARRAY.indexOf(item.priority),
        );

        if (insertIndex === -1) {
            this.itemList.push(newItem);
        } else {
            this.itemList.splice(insertIndex, 0, newItem);
        }
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
        this.itemList = this.itemList.filter(
            (listItem) => listItem.id !== itemId,
        );
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

    updateItemPriority = (
        itemId: number,
        newPriority: TodoListPriorityType,
    ): void => {
        const itemIndex = this.itemList.findIndex((item) => item.id === itemId);
        if (itemIndex === -1) {
            console.error('Error! The element "item" was not found.');
            return;
        }

        const itemToUpdate = this.itemList[itemIndex];
        this.itemList.splice(itemIndex, 1);
        itemToUpdate.priority = newPriority;
        this.addTodo(itemToUpdate);
    };

    toggleRenderType = (type: TodoRenderType): void => {
        this.todoRenderType = type;
    };

    changeCurrentIdTodoListItem = (itemId: number | null): void => {
        this.currentIdTodoListItem = itemId;
    };

    moveItem = (fromIndex: number, toIndex: number): void => {
        const newItems = Array.from(this.itemList);
        const [draggedItem] = newItems.splice(fromIndex, 1);
        newItems.splice(toIndex, 0, draggedItem);
        this.itemList = Array.from(newItems);
    };

    toJSON(): TodoListStoreType {
        return {
            title: this.title,
            itemList: this.itemList,
            todoRenderType: this.todoRenderType,
            currentIdTodoListItem: this.currentIdTodoListItem,
            id: this.id,
        };
    }

    static fromJSON(json: TodoListStoreType): TodoListStore {
        return new TodoListStore(
            json.title,
            json.itemList,
            json.todoRenderType,
            json.currentIdTodoListItem,
            json.id,
        );
    }

    constructor(
        title: string = '',
        itemList: TodoListItem[] = [],
        todoRenderType: TodoRenderType = 'ALL',
        currentIdTodoListItem: number | null = null,
        id: number = 0,
    ) {
        makeAutoObservable(this);
        runInAction(() => {
            this.title = title;
            this.itemList = itemList;
            this.todoRenderType = todoRenderType;
            this.currentIdTodoListItem = currentIdTodoListItem;
            this.id = id !== 0 ? id : Math.random();
        });
    }
}
