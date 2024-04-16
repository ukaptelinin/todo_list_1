import { FC, useContext } from 'react';
import style from './DirectPaginationButton.module.css';
import { TodosStateContext, AMOUNT } from '../../TodosStateContextProvider/context';
import usePageNumber from '../../../Hooks/usePageNumber';

const DirectPaginationButton : FC<{ direction: 'LEFT' | 'RIGHT' }> = ({ direction }) => {
    const { itemsList } = useContext(TodosStateContext);
    const [pageNumber, setPageNumber] = usePageNumber();

    const handleOnClick = (): void => {
        setPageNumber(direction === 'LEFT' ? pageNumber - 1 : pageNumber + 1);
    };
    return (
        <button
            type="button"
            className={style['direct-buttom']}
            onClick={handleOnClick}
            disabled={(direction === 'LEFT' && pageNumber === 1)
                      || (direction === 'RIGHT' && pageNumber === Math.ceil(itemsList.length / AMOUNT))}
        >
            {direction === 'LEFT' ? '‹' : '›'}
        </button>
    );
};

export default DirectPaginationButton;
