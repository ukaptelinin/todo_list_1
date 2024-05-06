import { FC, useContext } from 'react';
import { TextField } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import usePageNumber from '../../Hooks/usePageNumber';
import { TodosStateContext, AMOUNT } from '../TodosStateContextProvider/context';

const calculatePageNumber = (currentPageNumber: number,
    itemsCount: number): number => (itemsCount % AMOUNT > 0
    ? Math.floor(itemsCount / AMOUNT + 1)
    : currentPageNumber + 1);

interface ITodoInput {
    inputText: string;
}

const TodoInput: FC = () => {
    const {
        addTodo, toggleRenderType, itemsList,
    } = useContext(TodosStateContext);
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            inputText: '',
        },
    });
    const [pageNumber, setPageNumber] = usePageNumber();

    const onSubmit: SubmitHandler<ITodoInput> = (data) => {
        toggleRenderType('ALL');

        if (itemsList.length === 0) {
            setPageNumber(1);
        }

        addTodo({
            id: Math.random(),
            text: data.inputText,
            isDone: false,
        });
        reset({
            inputText: '',
        });

        if (itemsList.length > 0) {
            setPageNumber(calculatePageNumber(pageNumber, itemsList.length));
        }
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
