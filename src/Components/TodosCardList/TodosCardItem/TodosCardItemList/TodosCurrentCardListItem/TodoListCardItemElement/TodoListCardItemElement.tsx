import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { TodoListItem } from '../../../../../../Stores/TodoListStore';
import TodoDoneToggle from '../../../../../TodoDoneToggle/TodoDoneToggle';

const TodoListCardItemElement: FC<TodoListItem> = ({
    id, text, isDone,
}) => (
    <>
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

    </>
);
export default observer(TodoListCardItemElement);
