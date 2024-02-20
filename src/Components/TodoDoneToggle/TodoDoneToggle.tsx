import style from "./TodoDoneToggle.module.css";
import { useContext, FC, useRef } from "react";
import { TodosStateContext } from "../../context";

const TodoDoneToggle:FC<{id: number, isDone: boolean}> = ({id, isDone}) => {
    const { toggleDone } = useContext(TodosStateContext);
    const checkRef = useRef<HTMLInputElement>(null);
    const handleToggleDone = () => {
        toggleDone(id);
        }

    return (<input 
                className= {style.checked} 
                onChange={handleToggleDone}
                ref = {checkRef}
                type="checkbox" 
                checked={isDone}
             />)
}

export default TodoDoneToggle;