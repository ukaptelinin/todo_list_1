import { FC } from 'react';
import classNames from 'classnames';
import style from './ListItem.module.css';
import TodoDeleteButton from '../../TodoDeleteButton/TodoDeleteButton';
import TodoDoneToggle from '../../TodoDoneToggle/TodoDoneToggle';
import { TodoItem } from '../../TodosStateContextProvider/context';

const ListItem: FC<TodoItem> = ({ id, text, isDone }) => (
    <li className={style.list_item}>
        <TodoDoneToggle id={id} isDone={isDone} />
        <p className={classNames(style.item_text, { [style.item_text_is_done]: isDone })}>
            {text}
        </p>
        <TodoDeleteButton id={id} symbol="╳" />
    </li>
);

export default ListItem;
