import { useParams } from 'react-router-dom';
import useTodosStore from '../../Hooks/useTodosStore';
import { TodoListStore } from '../../Stores/TodoListStore';

const usePageTodoListStore = (currentId:number = 0) :TodoListStore => {
    const todosStore = useTodosStore();
    const { id } = useParams();
    const actualId:number = currentId !== 0 ? currentId : Number(id);
    const currentTodoListStore: TodoListStore | undefined = todosStore
        .todoListStores
        .find((item) => (item.id === actualId));
    return currentTodoListStore!;
};

export default usePageTodoListStore;
