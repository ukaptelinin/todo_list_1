import {
    makeObservable,
    observable,
    configure,
    // action,
    // autorun,
    runInAction,
} from 'mobx';
import { TodoListStore } from './TodoListStore';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true,
});

// export interface TodosList {
//     todoItem: TodoItem[],
// }

class TodosStore {
    // todosListItem: TodosList[] = [];

    todoListStores: TodoListStore[] = [];

    // todoListStore = new TodoListStore(this);
    /* сreateTodoListStore = (): TodoListStore => {
        const todoListStore = new TodoListStore(this);
        return todoListStore;
    }; */

    addTodosItem = (title: string): void => {
        // const todoListStore = createTodoListStore();
        // this.todoListStore.title = title;
        // this.todoListStore.id = Math.random();
        // this.todosListItem.push(this.todoListStore);
        runInAction(() => {
            this.todoListStores.push(new TodoListStore(title));
        });
    };

    /*   changeCurrentTodosItem = (itemId: number, itemTodo: TodoItem[]): void => {
        this.todosListItem = this.todosListItem.map((todosListItem) => {
            if (todosListItem.id === itemId) {
                return { ...todosListItem, itemTodo };
            }
            return todosListItem;
        });
    }; */

    constructor() {
        makeObservable(this, {
            todoListStores: observable,
            // addTodosItem,
            //     changeCurrentTodosItem: action,

        });
        // runInAction(() => {
        //     this.todosListItem = (JSON.parse(localStorage.getItem('todos') as string || '[]'));
        // });
    }
}

export const сreateTodosStore = (): TodosStore => {
    const todosStore = new TodosStore();
    // autorun(() => {
    //     localStorage.setItem('todos', JSON.stringify(todosStore.todosListItem));
    // });
    return todosStore;
};
export default TodosStore;
