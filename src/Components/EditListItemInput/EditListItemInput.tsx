import { FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import useTodoListStore from '../../Hooks/useTodoListStore';

interface ITodoInput {
    inputText: string;
}

const EditListItemInput: FC<{ id: number; text: string }> = ({ id, text }) => {
    const todoListStore = useTodoListStore();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            inputText: text,
        },
    });

    const onSubmit: SubmitHandler<ITodoInput> = (data) => {
        todoListStore.editTodo(id, data.inputText);
        todoListStore.changeCurrentIdTodoListItem(null);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="inputText"
                control={control}
                render={({ field }) => <TextField fullWidth {...field} inputProps={{ style: { fontSize: 30 } }} />}
            />
        </form>
    );
};

export default EditListItemInput;
