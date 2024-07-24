import { FC } from 'react';
import { Grid, ListItem, Typography } from '@mui/material';
import { TodoListItem } from '../../../../../Stores/TodoListStore';
import setTodoListItemPriorityColor from '../../../../TodoList/setTodoListItemPriorityColor';
import ToggleTodoListItemDone from '../../../../ToggleTodoListItemDone/ToggleTodoListItemDone';

const TodoListCardItemElement: FC<TodoListItem> = ({
    id, text, isDone, priority,
}) => (
    <Grid container direction="row">
        <ListItem sx={{ borderBottom: '1px solid silver' }}>
            <Grid item xs={2}>
                <ToggleTodoListItemDone id={id} isDone={isDone} />
            </Grid>
            <Grid item xs={10}>
                <Typography
                    variant="h6"
                    sx={{
                        textDecoration: isDone
                            ? 'line-through'
                            : 'none',
                        color: setTodoListItemPriorityColor(priority),
                    }}
                >
                    {text}
                </Typography>
            </Grid>
        </ListItem>
    </Grid>
);

export default TodoListCardItemElement;
