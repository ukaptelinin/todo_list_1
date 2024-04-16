import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import usePageNumber from '../../../Hooks/usePageNumber';
import style from './NumberPaginationButton.module.css';
import { PAGE } from '../../TodosStateContextProvider/context';

const NumberPaginationButton : FC<{ numberButton: number }> = ({ numberButton }) => {
    const [pageNumber] = usePageNumber();

    return (
        <li className={style['number-item']}>
            <Link
                to={`/?${PAGE}=${numberButton}`}
                className={classNames(style['number-button'],
                    { [style['current-number-button']]: pageNumber === numberButton })}

            >
                {numberButton}
            </Link>
        </li>
    );
};

export default NumberPaginationButton;
