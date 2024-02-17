import {createContext, useState} from "react";
import TodoHeader from "./Components/TodoHeader/TodoHeader";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import TodoFooter from "./Components/TodoFooter/TodoFooter";
import style from "../src/Components/TodosStateContextProvider/TodoStateContextProvider.module.css";

export const TodosStateContext = createContext<ITodosStateContext>({
  itemsList:[],
  addTodo:(newItem:TodoItem): void => {},
  toggleDone:(itemId:number): void => {},
  deleteTodo:(itemId:number):void => {}
});
interface TodoItem {
    id:number,
    text:string,
    isDone:boolean, 
};
interface ITodosStateContext {
  itemsList:TodoItem[],
  addTodo:(newItem:TodoItem)=>void;
  toggleDone:(itemId:number) =>void;
  deleteTodo:(itemId:number) =>void;
};
const TodoStateContextProvider = () => {

    const [itemsList, setItemsList] = useState<TodoItem[]>([]);

    const addTodo = (newItem:TodoItem): void => {
      setItemsList((currentList) => {
      return [newItem,...currentList];
      });
    };

    const toggleDone =(itemId:number): void => {
      
      setItemsList((currentList) =>{
       return currentList.map((listItem) =>{
       if(listItem.id === itemId) {
        return {...listItem,isDone:!listItem.isDone}
       }
       return listItem;
       });
      });
    };

    const deleteTodo = (itemId:number): void => {
      setItemsList((currentList) =>{
        return currentList.filter((listItem) =>{
           return listItem.id != itemId;
        });
      });
    };

  
    
    return(
    
    <TodosStateContext.Provider value={{itemsList, addTodo,toggleDone,deleteTodo}}>
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