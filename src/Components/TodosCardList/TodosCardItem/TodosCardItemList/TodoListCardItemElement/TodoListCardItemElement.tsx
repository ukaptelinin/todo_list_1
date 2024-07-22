import { FC } from 'react';
import { Grid, ListItem, Typography } from '@mui/material';
import { TodoListItem } from '../../../../../Stores/TodoListStore';
import TodoDoneToggle from '../../../../TodoDoneToggle/TodoDoneToggle';
import TodoListItemColor from '../../../../TodoList/TodoListItemColor';

const TodoListCardItemElement: FC<TodoListItem> = ({
    id, text, isDone, priority,
}) => (
    <Grid container direction="row">
        <ListItem sx={{ borderBottom: '1px solid silver' }}>
            <Grid item xs={2}>
                <TodoDoneToggle id={id} isDone={isDone} />
            </Grid>
            <Grid item xs={10}>
                <Typography
                    variant="h6"
                    sx={{ textDecoration: isDone ? 'line-through' : 'none', color: TodoListItemColor(priority) }}
                >
                    {text}
                </Typography>
            </Grid>

        </ListItem>
    </Grid>
);

export default TodoListCardItemElement;
