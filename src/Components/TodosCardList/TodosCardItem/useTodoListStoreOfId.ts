import useTodosStore from '../../../Hooks/useTodosStore';
import { TodoListStore } from '../../../Stores/TodoListStore';

const useTodoListStoreOfId = (currentId: number = 0): TodoListStore => {
    const todosStore = useTodosStore();
    const currentTodoListStore: TodoListStore | undefined = todosStore
        .todoListStores
        .find((item) => (item.id === currentId));
    return currentTodoListStore!;
};

export default useTodoListStoreOfId;
