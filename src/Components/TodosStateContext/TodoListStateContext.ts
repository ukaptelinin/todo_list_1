import { createContext } from 'react';
import { TodoListStore } from '../../Stores/TodoListStore';

const TodoListStateContext = createContext<TodoListStore | null>(null);

export default TodoListStateContext;
