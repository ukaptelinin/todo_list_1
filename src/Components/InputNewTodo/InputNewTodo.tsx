import { FC } from 'react';
import {
    TextField,
} from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import useTodosStore from '../../Hooks/useTodosStore';

interface ITodoInput {
    inputTitel: string;
}

const InputNewTodo: FC = () => {
    const todosStore = useTodosStore();
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            inputTitel: '',
        },
    });
    const onSubmit: SubmitHandler<ITodoInput> = (data) => {
        todosStore.addTodosItem(data.inputTitel);
        reset({
            inputTitel: '',
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="inputTitel"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            sx={{ width: '80ch', margin: 2 }}
                            {...field}
                            inputProps={{ style: { fontSize: 20, margin: 'auto' } }}
                            placeholder="Новый список"
                        />
                    )}
                />
            </form>
        </div>
    );
};

export default InputNewTodo;
