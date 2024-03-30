import { useContext, FC } from 'react';
import style from './DirectPaginationButton.module.css';
import { TodosStateContext, AMOUNT } from '../../TodosStateContextProvider/context';

const DirectPaginationButton : FC<{ direction: 'LEFT' | 'RIGHT' }> = ({ direction }) => {
    const { setTodoCurrentPage, todoRenderPageNumber, itemsList } = useContext(TodosStateContext);

    const handleOnClick = (): void => {
        setTodoCurrentPage(direction === 'LEFT' ? todoRenderPageNumber - 1 : todoRenderPageNumber + 1);
    };

    return (
        <button
            type="button"
            className={style['direct-buttom']}
            onClick={handleOnClick}
            disabled={(direction === 'LEFT' && todoRenderPageNumber === 0)
             || (direction === 'RIGHT' && todoRenderPageNumber === Math.floor(itemsList.length / AMOUNT))}
        >
            {direction === 'LEFT' ? '‹' : '›'}
        </button>
    );
};

export default DirectPaginationButton;
