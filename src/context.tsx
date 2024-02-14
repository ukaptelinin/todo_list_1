import {createContext, useState} from "react";
import TodoHeader from "./Components/TodoHeader/TodoHeader";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import TodoFooter from "./Components/TodoFooter/TodoFooter";
import style from "../src/Components/TodosStateContextProvider/TodoStateContextProvider.module.css";

export const TodosStateContext = createContext<ITodosStateContext>({
  itemsList:[],
  addTodo:(newItem:TodoItem): void => {}
});
interface TodoItem {
    id:number,
    text:string,
    isDone:boolean, 
};
interface ITodosStateContext {
  itemsList:TodoItem[],
  addTodo:(newItem:TodoItem)=>void;

};
const TodoStateContextProvider = () => {

    const [itemsList, setItemsList] = useState<TodoItem[]>([]);

    const addTodo = (newItem:TodoItem): void => {
      setItemsList((currentList) => {
      return [newItem,...currentList];
      });
    };

   /* const deleteTodo =(currentItem: string): void =>{
      
       let index = itemsList.indexOf(currentItem);
       setItemsList((currentList) => currentList.splice(index, 1));
      };*/
    
    return(
    
    <TodosStateContext.Provider value={{itemsList, addTodo}}>
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