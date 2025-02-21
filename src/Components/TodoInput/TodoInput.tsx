import { FC } from 'react';
import { Button, TextField } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import usePageNumber from '../../Hooks/usePageNumber';
import { AMOUNT } from '../../constants';
import useTodoListStore from '../../Hooks/useTodoListStore';
import { TodoListItem, TodoListPriorityType } from '../../Stores/TodoListStore';
import SelectPriority from '../../SelectPriority/SelectPriority';

const findIndexById = (itemList: TodoListItem[], id: number): number => {
    return itemList.findIndex((item) => item.id === id);
};

interface ITodoInput {
    inputText: string;
    inputPriority: TodoListPriorityType;
}

const TodoInput: FC = () => {
    const todoListStore = useTodoListStore();
    const { control, handleSubmit, reset } = useForm<ITodoInput>({
        defaultValues: {
            inputText: '',
            inputPriority: 'NONE',
        },
    });
    const [, setPageNumber] = usePageNumber();

    const onSubmit: SubmitHandler<ITodoInput> = (data) => {
        todoListStore.toggleRenderType('ALL');
        const itemId = Math.random();
        todoListStore.addTodo({
            id: itemId,
            text: data.inputText,
            isDone: false,
            priority: data.inputPriority,
        });
        const itemIndex = findIndexById(todoListStore.itemList, itemId);
        setPageNumber(Math.floor(itemIndex / AMOUNT) + 1);
        reset({
            inputText: '',
            inputPriority: 'NONE',
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="inputText"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            fullWidth
                            {...field}
                            inputProps={{ style: { fontSize: 30 } }}
                            placeholder="Что надо сделать?"
                        />
                    )}
                />
                <SelectPriority control={control} name="inputPriority" />
                <Button
                    type="submit"
                    size="small"
                    variant="outlined"
                    onClick={handleSubmit(onSubmit)}
                >
                    Save
                </Button>
            </form>
        </div>
    );
};

export default TodoInput;
