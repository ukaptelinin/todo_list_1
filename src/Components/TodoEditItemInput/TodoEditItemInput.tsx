import {
    useContext, FC, FormEvent, useRef,
} from 'react';
import TextField from '@mui/material/TextField';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoEditItemInput: FC<{ id: number, text: string }> = ({ id, text }) => {
    const { changeCurrentIdTodoListItem, editTodo } = useContext(TodosStateContext);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (inputRef.current !== null) {
            editTodo(id, inputRef.current.value as string);
        }
        changeCurrentIdTodoListItem(null);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                name="text"
                inputRef={inputRef}
                defaultValue={text}
            />
        </form>
    );
};

export default TodoEditItemInput;
