import { FC } from 'react';
import { Box, FormControl, TextField } from '@mui/material';
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
        <Box width="100%">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="inputTitle"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <TextField
                                sx={{
                                    fontSize: 20,
                                    width: {
                                        xs: '100%',
                                        sm: '60ch',
                                        md: '80ch',
                                    },
                                }}
                                {...field}
                                variant="outlined"
                                label="Новый список"
                            />
                        </FormControl>
                    )}
                />
            </form>
        </Box>
    );
};

export default InputNewTodoList;
