import { useContext, FC } from 'react';
import classNames from 'classnames';
import style from './NumberPaginationButton.module.css';
import { TodosStateContext } from '../../TodosStateContextProvider/context';

const NumberPaginationButton : FC<{ numberButton: number }> = ({ numberButton }) => {
    const { setTodoCurrentPage, todoRenderPageNumber } = useContext(TodosStateContext);

    const handleOnClick = (): void => {
        setTodoCurrentPage(numberButton - 1);
    };

    return (
        <li className={style['number-item']}>
            <button
                className={classNames(style['number-button'],
                    { [style['current-number-button']]: todoRenderPageNumber === numberButton - 1 })}
                type="button"
                onClick={handleOnClick}
            >
                {numberButton}
            </button>
        </li>
    );
};

export default NumberPaginationButton;
