import { useContext } from 'react';
import TodoListStore from '../Stores/store';
import TodosStateContext from '../Components/TodosStateContext/context';

const useTodoListStore = (): TodoListStore => {
    const todoListStore = useContext<TodoListStore>(TodosStateContext);
    return todoListStore;
};

export default useTodoListStore;
