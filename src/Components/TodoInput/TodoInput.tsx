import style from './TodoInput.module.css';
import useTodoListState from '../../Store/store';

const TodoInput = () => {
    const {
        value,
        handleChange,
        handleKeyPress
    } = useTodoListState();
    
   return (
    <div>
        <form>
            <input value = {value} onChange= {handleChange} onKeyDown = {handleKeyPress} className={style.todoinput}  placeholder='Что надо сделать?'></input>
        </form>
    </div>
   )
}

export default TodoInput;