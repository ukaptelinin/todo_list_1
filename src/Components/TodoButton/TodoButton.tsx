import style from "./TodoButton.module.css";

const TodoButton =({symbol}) => {
    return ( 
     <button className={style.todo_button}> 
        {symbol}</button>

    )

}

export default TodoButton;