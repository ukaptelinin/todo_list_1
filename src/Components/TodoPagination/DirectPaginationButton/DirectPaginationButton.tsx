import { useContext, FC } from 'react';
import style from './DirectPaginationButton.module.css';
import { TodosStateContext, DirectButtonType } from '../../TodosStateContextProvider/context';

const DirectPaginationButton : FC<{ direction: DirectButtonType }> = ({ direction }) => {
    const { setTodoCurrentPage, todoRenderPageNumber } = useContext(TodosStateContext);

    const handleOnClick = (): void => {
        setTodoCurrentPage(direction === 'LEFT' ? todoRenderPageNumber - 1 : todoRenderPageNumber + 1);
    };

    return (
        <button
            type="button"
            className={style['direct-buttom']}
            onClick={handleOnClick}
            disabled={todoRenderPageNumber === 0 && direction === 'LEFT'}
        >
            {direction === 'LEFT' ? '‹' : '›'}
        </button>
    );
};

export default DirectPaginationButton;
