import {
    useContext, useRef, FC, FormEvent,
} from 'react';
import style from './TodoInput.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoInput: FC = () => {
    const { addTodo } = useContext(TodosStateContext);
    const textRef = useRef<HTMLInputElement>(null);
    const handleSubMit = (event: FormEvent): void => {
        event.preventDefault();
        if (textRef.current) {
            addTodo({
                id: Math.random(),
                text: textRef.current.value,
                isDone: false,
            });
            textRef.current.value = '';
        }
    };

    return (
        <div>
            <form onSubmit={handleSubMit}>
                <input
                    name="text"
                    ref={textRef}
                    className={style.todoinput}
                    placeholder="Что надо сделать?"
                />
            </form>
        </div>
    );
};

export default TodoInput;
