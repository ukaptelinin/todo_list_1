import { FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import useTodoListStore from '../../Hooks/useTodoListStore';
import Button from '@mui/material/Button/Button';
import { TodoListPriorityType } from '../../Stores/TodoListStore';
import SelectPriority from '../../SelectPriority/SelectPriority';

interface ITodoInput {
    inputText: string;
    inputPriority: TodoListPriorityType;
}

const EditListItemInput: FC<{
    id: number;
    text: string;
    priority: TodoListPriorityType;
}> = ({ id, text, priority }) => {
    const todoListStore = useTodoListStore();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            inputText: text,
            inputPriority: priority,
        },
    });

    const onSubmit: SubmitHandler<ITodoInput> = (data) => {
        todoListStore.editTodo(id, data.inputText);
        todoListStore.changeCurrentIdTodoListItem(null);
        if (data.inputPriority != priority) {
            todoListStore.updateItemPriority(id, data.inputPriority);
        }
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
            <SelectPriority control={control} name="inputPriority" />
            <Button
                size="small"
                variant="outlined"
                onClick={handleSubmit(onSubmit)}
            >
                Save
            </Button>
        </form>
    );
};

export default EditListItemInput;
