import style from "./ButtonClearTodoList.module.css";
import { useContext, FC } from "react";
import { TodosStateContext } from "../../context";


const ButtonClearTodoList: FC = () => {
    const{ todoClearAll } = useContext(TodosStateContext);
    const handleOnClick = () => {
        todoClearAll();
    };
      
    return ( 
        <button 
            className={style.clear_button}
            onClick={handleOnClick}
        >
            Clear completed
        </button>
    );
};

export default ButtonClearTodoList;