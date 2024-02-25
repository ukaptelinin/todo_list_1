import {
    useContext, useRef, FC, FormEvent,
} from 'react';
import style from './TodoInput.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoInput: FC = () => {
    const { addTodo } = useContext(TodosStateContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        if (inputRef.current) {
            addTodo({
                id: Math.random(),
                text: inputRef.current.value,
                isDone: false,
            });
            inputRef.current.value = '';
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="text"
                    ref={inputRef}
                    className={style.todoinput}
                    placeholder="Что надо сделать?"
                />
            </form>
        </div>
    );
};

export default TodoInput;
