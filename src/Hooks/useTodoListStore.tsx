import { useContext } from 'react';
import { TodoListStore } from '../Stores/TodoListStore';
import TodosStateContext from '../Components/TodosStateContext/TodoListStateContext';

const useTodoListStore = (): TodoListStore => {
    const todoListStore = useContext(TodosStateContext);

    return todoListStore!;
};

export default useTodoListStore;
