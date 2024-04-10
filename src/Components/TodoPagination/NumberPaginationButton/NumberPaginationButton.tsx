import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import usePageNumber from '../../../Hooks/usePageNumber';
import style from './NumberPaginationButton.module.css';

const NumberPaginationButton : FC<{ numberButton: number }> = ({ numberButton }) => {
    const [getPageNumber] = usePageNumber();

    return (
        <li className={style['number-item']}>
            <Link
                to={`/?page=${numberButton}`}
                className={classNames(style['number-button'],
                    { [style['current-number-button']]: getPageNumber() === numberButton })}

            >
                {numberButton}
            </Link>
        </li>
    );
};

export default NumberPaginationButton;
