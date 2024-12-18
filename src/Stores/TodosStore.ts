import { configure, runInAction, autorun, makeAutoObservable } from 'mobx';
import { TodoListStore, TodoListStoreType } from './TodoListStore';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true,
});

export type CurrentThemeType = 'SYSTEM' | 'LIGHT' | 'DARK';

class TodosStore {
    currentTheme: CurrentThemeType = 'SYSTEM';
    todoListStores: TodoListStore[] = [];

    toggleTheme = (theme: CurrentThemeType): void => {
        this.currentTheme = theme;
    };

    addTodosItem = (title: string): void => {
        runInAction(() => this.todoListStores.push(new TodoListStore(title)));
    };

    deleteTodoList = (itemId: number): void => {
        this.todoListStores = this.todoListStores.filter(
            (todoListStores) => todoListStores.id !== itemId,
        );
    };

    loadStores = (): void => {
        const storesData = JSON.parse(
            (localStorage.getItem('todoListStores') as string) || '[]',
        );
        const currentThemeData = JSON.stringify(
            (localStorage.getItem('currentTheme') as string) || '',
        );
        if (Array.isArray(storesData) && storesData.length > 0) {
            runInAction(() => {
                (this.currentTheme = currentThemeData as CurrentThemeType),
                    (this.todoListStores = storesData.map(
                        (storeData: TodoListStoreType) =>
                            TodoListStore.fromJSON(storeData),
                    ));
            });
        }
        console.log(this.currentTheme);
    };

    saveStores = (): void => {
        const storesData = this.todoListStores.map((store) => store.toJSON());
        localStorage.setItem('todoListStores', JSON.stringify(storesData));
    };

    saveCurrentTheme = (): void => {
        localStorage.setItem('currentTheme', JSON.stringify(this.currentTheme));
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
        todosStore.saveCurrentTheme();
    });
    return todosStore;
};

export default TodosStore;
