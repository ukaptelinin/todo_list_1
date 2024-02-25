import { FC } from 'react';
import classNames from 'classnames';
import style from './ListItem.module.css';
import TodoDeleteButton from '../../TodoDeleteButton/TodoDeleteButton';
import TodoDoneToggle from '../../TodoDoneToggle/TodoDoneToggle';
import { TodoItem } from '../../TodosStateContextProvider/context';

const ListItem: FC<TodoItem> = ({ id, text, isDone }) => (
    <li className={style['list-item']}>
        <TodoDoneToggle id={id} isDone={isDone} />
        <p className={classNames(style['item-text'], { [style['item-text-is-done']]: isDone })}>
            {text}
        </p>
        <TodoDeleteButton id={id} symbol="╳" />
    </li>
);

export default ListItem;
