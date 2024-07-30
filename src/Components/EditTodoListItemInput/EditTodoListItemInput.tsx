import { FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import useTodoListStore from '../../Hooks/useTodoListStore';

interface ITodoInput {
    inputText: string;
}

<<<<<<<< HEAD:src/Components/EditListItemInput/EditListItemInput.tsx
const EditListItemInput: FC<{ id: number, text: string }> = ({ id, text }) => {
========
const EditTodoListItemInput: FC<{ id: number, text: string }> = ({ id, text }) => {
>>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b:src/Components/EditTodoListItemInput/EditTodoListItemInput.tsx
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
                render={({ field }) => (
                    <TextField
                        fullWidth
                        {...field}
                        inputProps={{ style: { fontSize: 30 } }}
                    />
                )}
            />
        </form>
    );
};

<<<<<<<< HEAD:src/Components/EditListItemInput/EditListItemInput.tsx
export default EditListItemInput;
========
export default EditTodoListItemInput;
>>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b:src/Components/EditTodoListItemInput/EditTodoListItemInput.tsx
