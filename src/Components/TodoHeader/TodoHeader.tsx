import style from "../TodoHeader/TodoHeader.module.css";
const TodoHeader = () => {
    
    return (
        <header className={style.header}>
           <h1 className={style.todo_header}>Список дел</h1>
        </header>
    )
}

export default TodoHeader;