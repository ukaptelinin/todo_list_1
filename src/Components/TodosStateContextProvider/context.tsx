import {
    FC, ReactNode, createContext, useState, useEffect,
} from 'react';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const TodosStateContext = createContext<ITodosStateContext>({
    todoRenderType: 'ALL',
    itemsList: [],
    todoRenderPageNumber: 0,
    currentIdTodoListItem: null,
    changeCurrentIdTodoListItem: (itemId: number | null): void => {},
    addTodo: (newItem: TodoItem): void => {},
    toggleDone: (itemId: number): void => {},
    deleteTodo: (itemId: number): void => {},
    setTodoCurrentPage: (currentPageNumber: number): void => {},
    editTodo: (itemId: number, text: string): void => {},
    toggleRenderType: (type: TodoRenderType): void => {},
    todoClearCompleted: (): void => {},
});

/* eslint-enable @typescript-eslint/no-unused-vars */
export const AMOUNT = 5;
export interface TodoItem {
    id:number,
    text:string,
    isDone:boolean,
}
export interface PagiNationButton {
    btnNumber:number,
}
export type TodoRenderType = 'ALL' | 'ACTIVE' | 'COMPLETED';

interface ITodosStateContext {
    itemsList: TodoItem[],
    todoRenderType: TodoRenderType,
    todoRenderPageNumber: number,
    currentIdTodoListItem: number | null,
    changeCurrentIdTodoListItem:(itemId: number | null) => void;
    addTodo:(newItem: TodoItem) => void;
    toggleDone:(itemId: number) => void;
    deleteTodo:(itemId: number) => void;
    setTodoCurrentPage:(currentPageNumber: number) => void;
    editTodo:(itemId: number, text: string) => void;
    toggleRenderType:(type: TodoRenderType) => void;
    todoClearCompleted: () => void;
}

const getItemsFromStorage = ():TodoItem[] => (
    JSON.parse(localStorage.getItem('todolist') as string || '[]')
);
const TodoStateContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [todoRenderType, setTodoRenderType] = useState<TodoRenderType>('ALL');
    const [currentIdTodoListItem, setCurrentIdTodoListItem] = useState<number | null>(null);
    const [itemsList, setItemsList] = useState<TodoItem[]>(getItemsFromStorage);
    const [todoRenderPageNumber, setTodoRenderPageNumber] = useState<number>(0);

    useEffect(():void => {
        localStorage.setItem('todolist', JSON.stringify(itemsList));
    }, [itemsList]);

    const addTodo = (newItem: TodoItem): void => {
        setItemsList((currentList) => [...currentList, newItem]);
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

    const setTodoCurrentPage = (currentPageNumber: number): void => {
        setTodoRenderPageNumber(currentPageNumber);
    };

    const toggleRenderType = (type: TodoRenderType): void => {
        setTodoRenderType(type);
    };

    const changeCurrentIdTodoListItem = (itemId: number | null): void => {
        setCurrentIdTodoListItem(itemId);
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
            todoRenderPageNumber,
            currentIdTodoListItem,
            changeCurrentIdTodoListItem,
            addTodo,
            toggleDone,
            deleteTodo,
            editTodo,
            toggleRenderType,
            setTodoCurrentPage,
            todoClearCompleted,
        }}
        >
            {children}
        </TodosStateContext.Provider>
    );
};

export default TodoStateContextProvider;
