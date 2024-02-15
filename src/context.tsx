import {createContext, useState} from "react";
import TodoHeader from "./Components/TodoHeader/TodoHeader";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import TodoFooter from "./Components/TodoFooter/TodoFooter";
import style from "../src/Components/TodosStateContextProvider/TodoStateContextProvider.module.css";

export const TodosStateContext = createContext<ITodosStateContext>({
  itemsList:[],
  addTodo:(newItem:TodoItem): void => {},
  toggleDone:(currentItem:TodoItem): void => {}

});
interface TodoItem {
    id:number,
    text:string,
    isDone:boolean, 
};
interface ITodosStateContext {
  itemsList:TodoItem[],
  addTodo:(newItem:TodoItem)=>void;
  toggleDone:(currentItem:TodoItem) =>void;
};
const TodoStateContextProvider = () => {

    const [itemsList, setItemsList] = useState<TodoItem[]>([]);

    const addTodo = (newItem:TodoItem): void => {
      setItemsList((currentList) => {
      return [newItem,...currentList];
      });
    };

    const toggleDone =(currentItem:TodoItem): void => {
      let currentList = [...itemsList];
      for(let i = 0;i < currentList.length;i++) {
         if(currentList[i].id === currentItem.id){
              currentList[i].isDone = currentItem.isDone;
              currentList[i].text = currentItem.text;
           }
      } 
      setItemsList(currentList);

    };

   /* const deleteTodo =(currentItem: string): void =>{
      
       let index = itemsList.indexOf(currentItem);
       setItemsList((currentList) => currentList.splice(index, 1));
      };*/
    
    return(
    
    <TodosStateContext.Provider value={{itemsList, addTodo,toggleDone}}>
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