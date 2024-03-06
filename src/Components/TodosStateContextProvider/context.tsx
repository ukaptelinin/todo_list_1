import {
    FC, ReactNode, createContext, useState,
} from 'react';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const TodosStateContext = createContext<ITodosStateContext>({
    todoRenderType: 'ALL',
    itemsList: [],
    addTodo: (newItem: TodoItem): void => {},
    toggleDone: (itemId: number): void => {},
    deleteTodo: (itemId: number): void => {},
    editTodo: (itemId: number, text: string): void => {},
    toggleRenderType: (type: TodoRenderType): void => {},
    todoClearCompleted: (): void => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

export interface TodoItem {
    id:number,
    text:string,
    isDone:boolean,
}

export type TodoRenderType = 'ALL' | 'ACTIVE' | 'COMPLETED' | 'EDIT-ITEM';

interface ITodosStateContext {
    itemsList: TodoItem[],
    todoRenderType: TodoRenderType,
    addTodo:(newItem: TodoItem) => void;
    toggleDone:(itemId: number) => void;
    deleteTodo:(itemId: number) => void;
    editTodo:(itemId: number, text: string) => void;
    toggleRenderType:(type: TodoRenderType) => void;
    todoClearCompleted: () => void;
}

const TodoStateContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [todoRenderType, setTodoRenderType] = useState<TodoRenderType>('ALL');
    const [itemsList, setItemsList] = useState<TodoItem[]>([]);

    const addTodo = (newItem: TodoItem): void => {
        setItemsList((currentList) => [newItem, ...currentList]);
    };

    const toggleDone = (itemId: number): void => {
        setItemsList((currentList) => currentList.map((listItem) => {
            if (listItem.id === itemId) {
                return { ...listItem, isDone: !listItem.isDone };
            }
            return listItem;
        }));
    };

    const deleteTodo = (itemId: number): void => {
        setItemsList((currentList) => currentList.filter((listItem) => listItem.id !== itemId));
    };

    const toggleRenderType = (type: TodoRenderType): void => {
        setTodoRenderType(type);
    };

    const editTodo = (itemId: number, text: string): void => {
        setItemsList((currentList) => currentList.map((listItem) => {
            if (listItem.id === itemId) {
                return { ...listItem, text };
            }
            return listItem;
        }));
    };

    const todoClearCompleted = (): void => {
        setItemsList((currentList) => currentList.filter((listItem) => !listItem.isDone));
    };

    return (
        <TodosStateContext.Provider value={{
            itemsList,
            todoRenderType,
            addTodo,
            toggleDone,
            deleteTodo,
            editTodo,
            toggleRenderType,
            todoClearCompleted,
        }}
        >
            {children}
        </TodosStateContext.Provider>
    );
};

export default TodoStateContextProvider;
