import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './DirectPaginationButton.module.css';
// import { AMOUNT, TodosStateContext } from '../../TodosStateContextProvider/context';
import usePageNumber from '../../../Hooks/usePageNumber';

const DirectPaginationButton : FC<{ direction: 'LEFT' | 'RIGHT' }> = ({ direction }) => {
    const [getPageNumber] = usePageNumber();

    const pathPageNumber = ():number => (direction === 'LEFT'
        ? getPageNumber() - 1
        : getPageNumber() + 1);
    return (
        <Link
            to={`/?page=${pathPageNumber()}`}
            className={style['direct-buttom']}
            //     disabled={(direction === 'LEFT' && getPageNumber() === 1)
            //          || (direction === 'RIGHT' && getPageNumber() === Math.ceil(itemsList.length / AMOUNT))}
        >
            {direction === 'LEFT' ? '‹' : '›'}
        </Link>
    );
};

export default DirectPaginationButton;
