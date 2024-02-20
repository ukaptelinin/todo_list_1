import { createContext, useState } from "react";
import TodoHeader from "./Components/TodoHeader/TodoHeader";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import TodoFooter from "./Components/TodoFooter/TodoFooter";
import style from "../src/Components/TodosStateContextProvider/TodoStateContextProvider.module.css";

export const TodosStateContext = createContext<ITodosStateContext>({
    todoTypeRender:"ALL",
    itemsList:[],
    addTodo:(newItem:TodoItem): void => {},
    toggleDone:(itemId:number): void => {},
    deleteTodo:(itemId:number): void => {},
    toggleRenderType:(type: TodoRenderType): void => {},
    todoClearAll:(): void => {},
});

interface TodoItem {
    id:number,
    text:string,
    isDone:boolean, 
};

export type TodoRenderType = "ALL" | "ACTIVE" | "COMPLETED";

interface ITodosStateContext {
    todoTypeRender: TodoRenderType,
    itemsList: TodoItem[],
    addTodo:(newItem: TodoItem)=> void;
    toggleDone:(itemId: number) => void;
    deleteTodo:(itemId: number) => void;
    toggleRenderType:(type: TodoRenderType) => void;
    todoClearAll: () => void;
};
const TodoStateContextProvider = () => {

    const [todoRenderType, setTodoRenderType] = useState<TodoRenderType>("ALL");
    const [itemsList, setItemsList] = useState<TodoItem[]>([]);

    const addTodo = (newItem: TodoItem): void => {
        setItemsList((currentList) => {
        return [newItem, ...currentList];
        });
    };

    const toggleDone =(itemId: number): void => {
        setItemsList((currentList) => {
            return currentList.map((listItem) => {
                if(listItem.id === itemId) {
                    return {...listItem, isDone: !listItem.isDone}
                }
            return listItem;
            });
        });
    };

    const deleteTodo = (itemId: number): void => {
        setItemsList((currentList) => {
            return currentList.filter((listItem) => {
                return listItem.id != itemId;
            });
        });
    };

    const toggleRenderType = (type: TodoRenderType): void => {
        setTodoRenderType(type);
    }
    
    const todoClearAll = (): void => {
        setItemsList([]);
    }
   
    return(
           <TodosStateContext.Provider value={{ itemsList, todoTypeRender: todoRenderType, addTodo, toggleDone, deleteTodo, toggleRenderType, todoClearAll }}>
               <div className={style.app_wrapper}>
                   <TodoHeader/>
                   <TodoInput/>
                   <TodoList/>
                   <TodoFooter/>
               </div>
           </TodosStateContext.Provider>
          )
  }

  export default TodoStateContextProvider;