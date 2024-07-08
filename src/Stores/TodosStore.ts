import {
    configure,
    runInAction,
    autorun,
    makeAutoObservable,
} from 'mobx';
import { TodoListStore, TodoListStoreType } from './TodoListStore';

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
        runInAction(() => this.todoListStores.push(new TodoListStore(title)));
    };

    deleteTodoList = (itemId: number): void => {
        this.todoListStores = this.todoListStores.filter((todoListStores) => todoListStores.id !== itemId);
    };

    loadStores = ():void => {
        const storesData = JSON.parse(localStorage.getItem('todoListStores') as string || '[]');
        if (Array.isArray(storesData)) {
            runInAction(() => {
                this.todoListStores = storesData.map(
                    (storeData: TodoListStoreType) => TodoListStore.fromJSON(storeData),
                );
            });
        }
    };

    saveStores = ():void => {
        const storesData = this.todoListStores.map((store) => store.toJSON());
        localStorage.setItem('todoListStores', JSON.stringify(storesData));
    };

    constructor() {
        makeAutoObservable(this);
        this.loadStores();
    }
}

export const сreateTodosStore = (): TodosStore => {
    const todosStore = new TodosStore();
    autorun(() => {
        todosStore.saveStores();
    });
    return todosStore;
};
export default TodosStore;
