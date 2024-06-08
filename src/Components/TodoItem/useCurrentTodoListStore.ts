import { useParams } from 'react-router-dom';
import useTodosStore from '../../Hooks/useTodosStore';
import { TodoListStore } from '../../Stores/TodoListStore';

const useCurrentTodoListStore = () :TodoListStore => {
    const todosStore = useTodosStore();
    const { id } = useParams();
    const currentTodoListStore: TodoListStore | undefined = todosStore
        .todoListStores
        .find((item) => item.id === Number(id));
    if (!currentTodoListStore) {
        throw Error('todoListStore not found!');
    }
    return currentTodoListStore!;
};

export default useCurrentTodoListStore;
