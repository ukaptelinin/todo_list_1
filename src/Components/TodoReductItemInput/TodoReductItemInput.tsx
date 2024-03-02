import {
    useContext, useState, useRef, FC, FormEvent, ChangeEvent,
} from 'react';
import style from './TodoReductItemInput.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoReductItemInput: FC<{ id: number, text: string }> = ({ id, text }) => {
    const { reductTodo } = useContext(TodosStateContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const [reductValue, setReductValue] = useState<string>(text);
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setReductValue(event.target.value);
    };
    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        if (inputRef.current) {
            reductTodo(id, reductValue);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="text"
                    ref={inputRef}
                    className={style.todoinput}
                    value={reductValue}
                    onChange={handleOnChange}
                />
            </form>
        </div>
    );
};

export default TodoReductItemInput;
