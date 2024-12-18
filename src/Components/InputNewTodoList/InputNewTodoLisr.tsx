import { FC } from 'react';
import { TextField } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import useTodosStore from '../../Hooks/useTodosStore';

interface ITodoInput {
    inputTitle: string;
}

const InputNewTodoList: FC = () => {
    const todosStore = useTodosStore();
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            inputTitle: '',
        },
    });
    const onSubmit: SubmitHandler<ITodoInput> = (data) => {
        todosStore.addTodosItem(data.inputTitle);
        reset({
            inputTitle: '',
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="inputTitle"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            className="DarkColor"
                            sx={{ width: '80ch', margin: 2 }}
                            {...field}
                            inputProps={{
                                style: { fontSize: 20, margin: 'auto' },
                            }}
                            placeholder="Новый список"
                        />
                    )}
                />
            </form>
        </div>
    );
};

export default InputNewTodoList;
