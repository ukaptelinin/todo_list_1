import {
    useContext, FC, FormEvent,
} from 'react';
import style from './TodoInput.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoInput: FC = () => {
    const { addTodo } = useContext(TodosStateContext);
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        const formData: FormData = new FormData(event.currentTarget);
        event.preventDefault();

        addTodo({
            id: Math.random(),
            text: formData.get('text') as string,
            isDone: false,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="text"
                    className={style['todo-input']}
                    placeholder="Что надо сделать?"
                />
            </form>
        </div>
    );
};

export default TodoInput;
