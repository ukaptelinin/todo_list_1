import { useContext, FC } from 'react';
import style from './ButtonClearTodoList.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const ButtonClearTodoList: FC = () => {
    const { todoClearCompleted } = useContext(TodosStateContext);
    const handleOnClick = (): void => {
        todoClearCompleted();
    };

    return (
        <button
            type="button"
            className={style['clear-button']}
            onClick={handleOnClick}
        >
            Clear completed
        </button>
    );
};

export default ButtonClearTodoList;
