import {
    useContext, useState, useRef, FC, FormEvent, ChangeEvent,
} from 'react';
import style from './TodoEditItemInput.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoEditItemInput: FC<{ id: number, text: string }> = ({ id, text }) => {
    const { changeCurrentIdTodoListItem, editTodo } = useContext(TodosStateContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const [editValue, setEditValue] = useState<string>(text);
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setEditValue(event.target.value);
    };
    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        if (inputRef.current) {
            editTodo(id, editValue);
            changeCurrentIdTodoListItem(null);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="text"
                ref={inputRef}
                className={style.todoinput}
                value={editValue}
                onChange={handleOnChange}
            />
        </form>
    );
};

export default TodoEditItemInput;
