import { FC, useEffect, useRef } from 'react';
import { Box, Button, FormControl, TextField } from '@mui/material';
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
        if (data.inputText) {
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
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                >
                    <Controller
                        name="inputText"
                        control={control}
                        render={({ field }) => (
                            <Box flexGrow={1}>
                                <FormControl fullWidth>
                                    <TextField
                                        fullWidth
                                        {...field}
                                        sx={{
                                            fontSize: 40,
                                        }}
                                        label="Что надо сделать?"
                                        variant="outlined"
                                    />
                                </FormControl>
                            </Box>
                        )}
                    />

                    <Box flexShrink={0}>
                        <SelectPriority
                            control={control}
                            name="inputPriority"
                        />
                    </Box>

                    <Button
                        size="large"
                        type="submit"
                        variant="outlined"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Сохранить
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default TodoInput;
