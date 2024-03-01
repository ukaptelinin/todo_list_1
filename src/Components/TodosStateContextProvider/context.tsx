import {
    FC, ReactNode, createContext, useState,
} from 'react';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const TodosStateContext = createContext<ITodosStateContext>({
    todoTypeRender: 'ALL',
    itemsList: [],
    addTodo: (newItem: TodoItem): void => {},
    toggleDone: (itemId: number): void => {},
    deleteTodo: (itemId: number): void => {},
    setReductFlag: (itemId: number): void => {},
    reductTodo: (itemId: number, text: string): void => {},
    toggleRenderType: (type: TodoRenderType): void => {},
    todoClearAll: (): void => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

export interface TodoItem {
    id:number,
    text:string,
    isDone:boolean,
    isReduct:boolean,
}

export type TodoRenderType = 'ALL' | 'ACTIVE' | 'COMPLETED';

interface ITodosStateContext {
    todoTypeRender: TodoRenderType,
    itemsList: TodoItem[],
    addTodo:(newItem: TodoItem) => void;
    toggleDone:(itemId: number) => void;
    deleteTodo:(itemId: number) => void;
    setReductFlag:(itemId: number) => void;
    reductTodo:(itemId: number, text: string) => void;
    toggleRenderType:(type: TodoRenderType) => void;
    todoClearAll: () => void;
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

    const reductTodo = (itemId: number, text: string): void => {
        console.log(itemId, text);
    };

    const todoClearAll = (): void => {
        setItemsList([]);
    };

    const setReductFlag = (itemId: number): void => {
        setItemsList((currentList) => currentList.map((listItem) => {
            if (listItem.id !== itemId) {
                return { ...listItem, isReduct: false };
            }
            return { ...listItem, isReduct: true };
        }));
    };

    return (
        <TodosStateContext.Provider value={{
            itemsList,
            todoTypeRender: todoRenderType,
            addTodo,
            toggleDone,
            deleteTodo,
            setReductFlag,
            reductTodo,
            toggleRenderType,
            todoClearAll,
        }}
        >
            {children}
        </TodosStateContext.Provider>
    );
};

export default TodoStateContextProvider;
