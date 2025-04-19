import { FC, useRef } from 'react';
import { FormControl, TextField } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import useTodoListStore from '../../Hooks/useTodoListStore';
import useClickOutside from '../../Hooks/useClickOutside';

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

    const formRef = useRef<HTMLFormElement>(null);
    const clickActionOutsideComponent = (): void => {
        toggleEditMode(false);
    };

    useClickOutside(clickActionOutsideComponent, formRef);

    return (
        <form
            ref={formRef}
            style={{ width: '30%' }}
            onSubmit={handleSubmit(onSubmit)}
        >
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
    );
};

export default EditToDoListTitle;
