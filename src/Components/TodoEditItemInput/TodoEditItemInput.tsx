import { useContext, FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { TodosStateContext } from '../TodosStateContextProvider/context';

interface ITodoInput {
    inputText: string;
}

const TodoEditItemInput: FC<{ id: number, text: string }> = ({ id, text }) => {
    const { changeCurrentIdTodoListItem, editTodo } = useContext(TodosStateContext);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            inputText: text,
        },
    });

    const onSubmit: SubmitHandler<ITodoInput> = (data) => {
        editTodo(id, data.inputText);
        changeCurrentIdTodoListItem(null);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="inputText"
                control={control}
                render={({ field }) => (
                    <TextField
                        fullWidth
                        {...field}
                    />
                )}
            />
        </form>
    );
};

export default TodoEditItemInput;
