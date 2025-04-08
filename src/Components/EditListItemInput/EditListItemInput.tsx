import { FC, useRef } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import useTodoListStore from '../../Hooks/useTodoListStore';
import Button from '@mui/material/Button/Button';
import { TodoListPriorityType } from '../../Stores/TodoListStore';
import SelectPriority from '../../SelectPriority/SelectPriority';
import { FormControl } from '@mui/material';
import useClickOutside from '../../Hooks/useClickOutside';

interface ITodoInput {
    inputText: string;
    inputPriority: TodoListPriorityType;
}

const EditListItemInput: FC<{
    id: number;
    text: string;
    priority: TodoListPriorityType;
}> = ({ id, text, priority }) => {
    const todoListStore = useTodoListStore();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            inputText: text,
            inputPriority: priority,
        },
    });

    const onSubmit: SubmitHandler<ITodoInput> = (data) => {
        todoListStore.editTodo(id, data.inputText);
        todoListStore.changeCurrentIdTodoListItem(null);
        if (data.inputPriority !== priority) {
            todoListStore.updateItemPriority(id, data.inputPriority);
        }
    };

    const divRef = useRef<HTMLFormElement>(null);
    const clickAction = (): void => {
        todoListStore.changeCurrentIdTodoListItem(null);
    };

    useClickOutside(clickAction, divRef);

    return (
        <form
            ref={divRef}
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                name="inputText"
                control={control}
                render={({ field }) => (
                    <div style={{ flexGrow: 1, minWidth: 0 }}>
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
                    </div>
                )}
            />
            <div style={{ flexShrink: 0 }}>
                <SelectPriority control={control} name="inputPriority" />
            </div>

            <Button
                size="large"
                variant="outlined"
                onClick={handleSubmit(onSubmit)}
            >
                Сохранить
            </Button>
        </form>
    );
};

export default EditListItemInput;
