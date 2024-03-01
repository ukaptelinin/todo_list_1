import { useContext, FC } from 'react';
import classNames from 'classnames';
import style from './ListItem.module.css';
import TodoDeleteButton from '../../TodoDeleteButton/TodoDeleteButton';
import TodoDoneToggle from '../../TodoDoneToggle/TodoDoneToggle';
import TodoReductItemInput from '../../TodoReductItemInput/TodoReductItemInput';
import { TodosStateContext, TodoItem } from '../../TodosStateContextProvider/context';

const ListItem: FC<TodoItem> = ({
    id, text, isDone, isReduct,
}) => {
    const { setReductFlag } = useContext(TodosStateContext);
    const handleOnDoubleClick = (): void => {
        setReductFlag(id);
    };

    if (isReduct) {
        return (
            <li className={style['list-item']}>
                <TodoReductItemInput id={id} text={text} />
            </li>
        );
    }
    return (
        <li className={style['list-item']}>
            <TodoDoneToggle id={id} isDone={isDone} />
            <p
                className={classNames(style['item-text'], { [style['item-text-is-done']]: isDone })}
                onDoubleClick={handleOnDoubleClick}
            >
                {text}
            </p>
            <TodoDeleteButton id={id} symbol="╳" />
        </li>
    );
};

export default ListItem;
