import { useContext, FC } from 'react';
import style from './TodoDelateButton.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoButton:FC<{ id:number, symbol:string }> = ({ id, symbol }) => {
    const { deleteTodo } = useContext(TodosStateContext);
    const handleOnClick = (): void => {
        deleteTodo(id);
    };

    return (
        <button
            type="button"
            className={style['todo-button']}
            onClick={handleOnClick}
        >
            {symbol}
        </button>
    );
};

export default TodoButton;
