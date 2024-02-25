import { useContext, FC } from 'react';
import style from './TodoDeleteButton.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoDeleteButton: FC<{ id:number, symbol:string }> = ({ id, symbol }) => {
    const { deleteTodo } = useContext(TodosStateContext);
    const handleOnClick = (): void => {
        deleteTodo(id);
    };

    return (
        <button
            type="button"
            className={style['todo-delete-button']}
            onClick={handleOnClick}
        >
            {symbol}
        </button>
    );
};

export default TodoDeleteButton;
