import { useParams } from 'react-router-dom';
import useTodosStore from '../../Hooks/useTodosStore';
import { TodoListStore } from '../../Stores/TodoListStore';

const usePageTodoListStore = (): TodoListStore => {
    const todosStore = useTodosStore();
    const { id } = useParams();
    const currentTodoListStore: TodoListStore | undefined =
        todosStore.todoListStores.find((item) => item.id === Number(id));
    return currentTodoListStore!;
};

export default usePageTodoListStore;
