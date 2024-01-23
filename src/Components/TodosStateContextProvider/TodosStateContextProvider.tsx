import { useState } from "react";
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import TodoFooter from "../TodoFooter/TodoFooter";
import {MainContext} from '../../context';
import style from "../TodosStateContextProvider/TodoStateContextProvider.module.css";


/*const handleSubMit =(value:string) => {
  setItemsList(itemsList.concat(value));
}*/

const TodoStateContextProvider = () => {

  const [itemsList, setItemsList] = useState<string[]>(['Погулять с собакой Погулять с собакой Погулять с собакой Погулять с собакой','Съездить в маркет', 'Сыграть в шахматы']);
  
  return(
  <MainContext.Provider value={{itemsList, setItemsList}}>
    <div className={style.app_wrapper}>
      <TodoHeader/>
      <TodoInput/>
      <TodoList/>
      <TodoFooter/>
    </div>
  </MainContext.Provider>
  )
}

export default TodoStateContextProvider;