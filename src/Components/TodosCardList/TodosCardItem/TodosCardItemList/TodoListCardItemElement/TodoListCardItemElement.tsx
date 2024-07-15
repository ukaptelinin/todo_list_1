import { FC } from 'react';
import { Grid, ListItem, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { TodoListItem } from '../../../../../Stores/TodoListStore';
import TodoDoneToggle from '../../../../TodoDoneToggle/TodoDoneToggle';

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
                    sx={{ textDecoration: isDone ? 'line-through' : 'none' }}

                >
                    {text}
                </Typography>
            </Grid>

        </ListItem>
    </Grid>
);

export default observer(TodoListCardItemElement);
