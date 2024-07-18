import { FC } from 'react';
import { Grid, ListItem, Typography } from '@mui/material';
import { TodoListItem } from '../../../../../Stores/TodoListStore';
import TodoDoneToggle from '../../../../TodoDoneToggle/TodoDoneToggle';
import useTodoListItemColor from '../../../../TodoList/useTodoListItemColor';

const TodoListCardItemElement: FC<TodoListItem> = ({
    id, text, isDone,
}) => (
    <Grid container direction="row">
        <ListItem sx={{ borderBottom: '1px solid silver' }}>
            <Grid item xs={2}>
                <TodoDoneToggle id={id} isDone={isDone} />
            </Grid>
            <Grid item xs={10}>
                <Typography
                    variant="h6"
                    sx={{ textDecoration: isDone ? 'line-through' : 'none', color: useTodoListItemColor(id) }}
                >
                    {text}
                </Typography>
            </Grid>

        </ListItem>
    </Grid>
);

export default TodoListCardItemElement;
