import style from "./TodoDelateButton.module.css";
import { useContext,FC } from "react";
import {TodosStateContext} from "../../context";


const TodoButton:FC<{id:number, symbol:string}> =({id,symbol}) => {
    const {deleteTodo} = useContext(TodosStateContext);
    const handleOnClick = ( ) => {
        deleteTodo(id);
    };
      
    return ( 
     <button className={style.todo_button}
         onClick={handleOnClick}> 
        {symbol}
        </button>
         )

}

export default TodoButton;