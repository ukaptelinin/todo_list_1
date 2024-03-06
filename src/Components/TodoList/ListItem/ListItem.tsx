import {
    useContext, FC,
} from 'react';
import classNames from 'classnames';
import style from './ListItem.module.css';
import TodoDeleteButton from '../../TodoDeleteButton/TodoDeleteButton';
import TodoDoneToggle from '../../TodoDoneToggle/TodoDoneToggle';
import TodoEditItemInput from '../../TodoEditItemInput/TodoEditItemInput';
import { TodoItem, TodosStateContext } from '../../TodosStateContextProvider/context';

const ListItem: FC<TodoItem> = ({
    id, text, isDone,
}) => {
    const {
        currentIdTodoListItem,
        changeCurrentIdTodoListItem,
    } = useContext(TodosStateContext);

    const handleOnDoubleClick = (): void => {
        if (id !== currentIdTodoListItem) {
            changeCurrentIdTodoListItem(id);
        }
    };

    return (
        <li className={style['list-item']}>
            { currentIdTodoListItem === id
                ? (
                    <TodoEditItemInput
                        id={id}
                        text={text}
                    />
                ) : (
                    <>
                        <TodoDoneToggle id={id} isDone={isDone} />
                        <p
                            className={classNames(style['item-text'], { [style['item-text-is-done']]: isDone })}
                            onDoubleClick={handleOnDoubleClick}
                        >
                            {text}
                        </p>
                        <TodoDeleteButton id={id} symbol="╳" />
                    </>
                )}
        </li>
    );
};

export default ListItem;
