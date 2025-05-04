import { FC, useRef } from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    TextField,
} from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import useTodoListStore from '../../Hooks/useTodoListStore';

interface EditToDoListTitleProps {
    toggleEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

const EditToDoListTitle: FC<EditToDoListTitleProps> = ({
    toggleEditMode,
    title,
}) => {
    const todoListStore = useTodoListStore();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            editTitle: title,
        },
    });

    const onSubmit: SubmitHandler<{ editTitle: string }> = (data) => {
        todoListStore.editTodoTitle(data.editTitle);
        toggleEditMode(false);
    };

    const handleDialogClose = () => {
        toggleEditMode(false);
    };

    return (
        <form
            style={{
                width: '100%',
                fontSize: 20,
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <DialogTitle>Новый заголовок</DialogTitle>
            <DialogContent>
                <Controller
                    name="editTitle"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <TextField
                                {...field}
                                sx={{ py: 0 }}
                                variant="outlined"
                            />
                        </FormControl>
                    )}
                />
            </DialogContent>
            <DialogActions>
                <Button sx={{ py: 0 }} onClick={handleDialogClose}>
                    Закрыть
                </Button>
                <Button
                    sx={{ py: 0 }}
                    type="submit"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    Сохранить
                </Button>
            </DialogActions>
        </form>
    );
};

export default EditToDoListTitle;
