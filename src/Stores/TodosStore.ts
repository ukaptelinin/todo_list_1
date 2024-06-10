import {
    makeObservable,
    observable,
    configure,
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

class TodosStore {
    todoListStores: TodoListStore[] = [];

    addTodosItem = (title: string): void => {
        runInAction(() => {
            this.todoListStores.push(new TodoListStore(title));
        });
    };

    constructor() {
        makeObservable(this, {
            todoListStores: observable,
        });
    }
}

export const сreateTodosStore = (): TodosStore => {
    const todosStore = new TodosStore();
    return todosStore;
};
export default TodosStore;
