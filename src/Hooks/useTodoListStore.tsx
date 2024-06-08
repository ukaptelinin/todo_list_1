import { useContext } from 'react';
import { TodoListStore } from '../Stores/TodoListStore';
import TodosStateContext from '../Components/TodosStateContext/TodoListStateContext';

const useTodoListStore = (): TodoListStore => {
    const todoListStore = useContext(TodosStateContext);
    if (!todoListStore) {
        throw Error('todoListStore instance shoold be injected!');
    }
    return todoListStore!;
};

export default useTodoListStore;
