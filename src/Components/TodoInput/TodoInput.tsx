import { FC } from 'react';
import { TextField } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import usePageNumber from '../../Hooks/usePageNumber';
import { AMOUNT } from '../../constants';
import useTodoListStore from '../../Hooks/useTodoListStore';

const calculatePageNumber = (currentPageNumber: number,
    itemsCount: number): number => (itemsCount % AMOUNT > 0
    ? Math.floor(itemsCount / AMOUNT + 1)
    : currentPageNumber + 1);

interface ITodoInput {
    inputText: string;
}

const TodoInput: FC = () => {
    const todoListStore = useTodoListStore();
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            inputText: '',
        },
    });
    const [pageNumber, setPageNumber] = usePageNumber();

    const onSubmit: SubmitHandler<ITodoInput> = (data) => {
        todoListStore.toggleRenderType('ALL');
        setPageNumber(todoListStore.itemList.length
            ? calculatePageNumber(pageNumber, todoListStore.itemList.length)
            : 1);

        todoListStore.addTodo({
            id: Math.random(),
            text: data.inputText,
            isDone: false,
        });
        reset({
            inputText: '',
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
            </form>
        </div>
    );
};

export default TodoInput;
