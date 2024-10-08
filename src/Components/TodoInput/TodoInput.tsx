import { FC } from 'react';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import usePageNumber from '../../Hooks/usePageNumber';
import { AMOUNT } from '../../constants';
import useTodoListStore from '../../Hooks/useTodoListStore';
import { TodoListPriorityType } from '../../Stores/TodoListStore';

const calculatePageNumber = (currentPageNumber: number, itemsCount: number): number =>
    itemsCount % AMOUNT > 0 ? Math.floor(itemsCount / AMOUNT + 1) : currentPageNumber + 1;

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
    const [pageNumber, setPageNumber] = usePageNumber();

    const onSubmit: SubmitHandler<ITodoInput> = (data) => {
        todoListStore.toggleRenderType('ALL');
        setPageNumber(
            todoListStore.itemList.length ? calculatePageNumber(pageNumber, todoListStore.itemList.length) : 1,
        );

        todoListStore.addTodo({
            id: Math.random(),
            text: data.inputText,
            isDone: false,
            priority: data.inputPriority,
        });
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
                <Controller
                    name="inputPriority"
                    control={control}
                    render={({ field }) => (
                        <>
                            <InputLabel id="demo-simple-select-label">Приоритет</InputLabel>
                            <Select
                                {...field}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Приоритет"
                            >
                                <MenuItem value="HIGH" sx={{ color: 'crimson' }}>
                                    HIGH
                                </MenuItem>
                                <MenuItem value="MEDIUM" sx={{ color: 'green' }}>
                                    MEDIUM
                                </MenuItem>
                                <MenuItem value="LOW" sx={{ color: 'darkblue' }}>
                                    LOW
                                </MenuItem>
                            </Select>
                        </>
                    )}
                />
                <Button size="small" variant="outlined" onClick={handleSubmit(onSubmit)}>
                    Save
                </Button>
            </form>
        </div>
    );
};

export default TodoInput;
