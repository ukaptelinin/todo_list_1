import style from "./TodoInput.module.css";
import { useContext, useRef, FC, FormEvent } from "react";
import { TodosStateContext } from "../../context";

const TodoInput: FC = () => {
    const { addTodo } = useContext(TodosStateContext);
    const textRef = useRef<HTMLInputElement>(null);
    const handleSubMit = (event: FormEvent) => {
       event.preventDefault();
       if(textRef.current){
           addTodo({
           id:Math.random(),
           text: textRef.current.value,
           isDone:false
           });
       textRef.current.value ='';
          }
       }
       
   return (
    <div>
        <form onSubmit={handleSubMit}>
            <input name = "text"
            ref = {textRef}
            className={style.todoinput}  
            placeholder="Что надо сделать?">
            </input>
        </form>    
    </div>
   )
}

export default TodoInput;