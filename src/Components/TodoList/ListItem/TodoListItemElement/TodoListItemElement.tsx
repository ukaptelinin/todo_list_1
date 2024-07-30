import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import useTodoListStore from '../../../../Hooks/useTodoListStore';
import { TodoListItem } from '../../../../Stores/TodoListStore';
import setTodoListItemPriorityColor from '../../setTodoListItemPriorityColor';
<<<<<<< HEAD
import ToggleTodoListItemDone from '../../../ToggleTodoListItemDone/ToggleTodoListItemDone';
import DeleteListItemButton from '../../../DeleteListItemButton/DeleteListItemButton';
=======
import DeleteTodoListItemButton from '../../../DeleteTodoListItemButton/DeleteTodoListItemButton';
import ToggleTodoListItemDone from '../../../ToggleTodoListItemDone/ToggleTodoListItemDone';
>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b

const TodoListItemElement: FC<TodoListItem> = ({
    id, text, isDone, priority,
}) => {
    const todoListStore = useTodoListStore();

    const handleOnDoubleClick = (): void => {
        if (id !== todoListStore.currentIdTodoListItem) {
            todoListStore.changeCurrentIdTodoListItem(id);
        }
    };

    return (
        <>
            <Grid item xs={2}>
                <ToggleTodoListItemDone id={id} isDone={isDone} />
            </Grid>
            <Grid item xs={9}>
                <Typography
                    variant="h4"
                    sx={{
<<<<<<< HEAD
                        textDecoration: isDone ? 'line-through' : 'none',
=======
                        textDecoration: isDone ? 'line-through'
                            : 'none',
>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b
                        color: setTodoListItemPriorityColor(priority),
                    }}
                    onDoubleClick={handleOnDoubleClick}
                >
                    {text}
                </Typography>
            </Grid>
            <Grid item xs={1}>
<<<<<<< HEAD
                <DeleteListItemButton id={id} />
=======
                <DeleteTodoListItemButton id={id} />
>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b
            </Grid>
        </>
    );
};
export default observer(TodoListItemElement);
