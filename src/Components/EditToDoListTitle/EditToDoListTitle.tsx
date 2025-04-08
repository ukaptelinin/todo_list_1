import { FC, useRef } from 'react';
import { Box, FormControl, TextField } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import useTodoListStore from '../../Hooks/useTodoListStore';
import useClickOutside from '../../Hooks/useClickOutside';

interface ITodoEditTitle {
    editTitle: string;
}

interface EditToDoListTitleProps {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

const EditToDoListTitle: FC<EditToDoListTitleProps> = ({ setState, title }) => {
    const todoListStore = useTodoListStore();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            editTitle: title,
        },
    });

    const onSubmit: SubmitHandler<ITodoEditTitle> = (data) => {
        todoListStore.editTodoTitle(data.editTitle);
        setState(false);
    };

    const divRef = useRef<HTMLElement>(null);
    const clickAction = (): void => {
        setState(false);
    };

    useClickOutside(clickAction, divRef);

    return (
        <Box ref={divRef} width="30%">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="editTitle"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <TextField
                                {...field}
                                variant="outlined"
                                label="Текущий список"
                            />
                        </FormControl>
                    )}
                />
            </form>
        </Box>
    );
};

export default EditToDoListTitle;
