import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import useTodoListStore from '../../../../Hooks/useTodoListStore';
import { TodoListItem } from '../../../../Stores/TodoListStore';
import setTodoListItemPriorityColor from '../../setTodoListItemPriorityColor';
import DeleteListItemButton from '../../../DeleteListItemButton/DeleteListItemButton';
import ToggleTodoListItemDone from '../../../ToggleTodoListItemDone/ToggleTodoListItemDone';

const TodoListItemElement: FC<TodoListItem> = ({ id, text, isDone, priority }) => {
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
                        textDecoration: isDone ? 'line-through' : 'none',
                        color: setTodoListItemPriorityColor(priority),
                    }}
                    onDoubleClick={handleOnDoubleClick}
                >
                    {text}
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <DeleteListItemButton id={id} />
            </Grid>
        </>
    );
};
export default observer(TodoListItemElement);
