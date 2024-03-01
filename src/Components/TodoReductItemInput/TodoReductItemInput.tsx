import {
    useContext, useRef, FC, FormEvent,
} from 'react';
import style from './TodoReductItemInput.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoReductItemInput: FC<{ id: number, text: string }> = ({ id, text }) => {
    const { reductTodo } = useContext(TodosStateContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        if (inputRef.current) {
            reductTodo(id, inputRef.current.value);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="text"
                    ref={inputRef}
                    className={style.todoinput}
                    value={text}
                />
            </form>
        </div>
    );
};

export default TodoReductItemInput;
