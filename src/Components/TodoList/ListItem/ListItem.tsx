import {
    useState, useContext, FC,
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
    const { todoRenderType, toggleRenderType } = useContext(TodosStateContext);
    const [currentIdTodoListItem, setCurrentIdTodoListItem] = useState<number>(0);
    const handleOnDoubleClick = (): void => {
        if (todoRenderType !== 'EDIT-ITEM') {
            setCurrentIdTodoListItem(id);
            toggleRenderType('EDIT-ITEM');
        }
    };

    return (
        <li className={style['list-item']}>
            {todoRenderType === 'EDIT-ITEM' && currentIdTodoListItem === id
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
