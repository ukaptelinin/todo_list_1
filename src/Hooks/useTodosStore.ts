import { useContext } from 'react';
import TodosStateContext from '../Components/TodosStateContext/TodosStateContext';
import TodosStore from '../Stores/TodosStore';

const useTodosStore = (): TodosStore => {
    const todosStore = useContext<TodosStore>(TodosStateContext);
    return todosStore;
};

export default useTodosStore;
