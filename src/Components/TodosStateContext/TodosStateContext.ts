import { createContext } from 'react';
import TodosStore, { сreateTodosStore } from '../../Stores/TodosStore';

export const todosStore: TodosStore = сreateTodosStore();

const TodosStateContext = createContext<TodosStore>(todosStore);

export default TodosStateContext;
