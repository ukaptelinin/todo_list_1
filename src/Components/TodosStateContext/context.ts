import { createContext } from 'react';
import TodoListStore, { сreateTodoListStore } from '../../Stores/store';

export const todoListStore: TodoListStore = сreateTodoListStore();

const TodosStateContext = createContext<TodoListStore>(todoListStore);

export default TodosStateContext;
