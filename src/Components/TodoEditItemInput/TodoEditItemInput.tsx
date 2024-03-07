import {
    useContext, FC, FormEvent,
} from 'react';
import style from './TodoEditItemInput.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoEditItemInput: FC<{ id: number, text: string }> = ({ id, text }) => {
    const { changeCurrentIdTodoListItem, editTodo } = useContext(TodosStateContext);

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        const formData: FormData = new FormData(event.currentTarget);
        event.preventDefault();
        editTodo(id, formData.get('text') as string);
        changeCurrentIdTodoListItem(null);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="text"
                className={style['todo-input']}
                defaultValue={text}
            />
        </form>
    );
};

export default TodoEditItemInput;
