import { FC } from 'react';
import { Grid, ListItem, Typography } from '@mui/material';
import { TodoListItem } from '../../../../../Stores/TodoListStore';
import ToggleTodoListItemDone from '../../../../ToggleTodoListItemDone/ToggleTodoListItemDone';
import useTodosTheme from '../../../../../Hooks/useTodoTheme';
import selectTodoListPriorityColor from '../../../../../Hooks/useTodoListItemPriorityColor';

const TodoListCardItemElement: FC<TodoListItem> = ({
    id,
    text,
    isDone,
    priority,
}) => {
    const todoTheme = useTodosTheme();
    return (
        <Grid container direction="row">
            <ListItem sx={{ borderBottom: '1px solid silver' }}>
                <Grid item xs={2}>
                    <ToggleTodoListItemDone id={id} isDone={isDone} />
                </Grid>
                <Grid item xs={10} sx={{ pl: 1 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            textDecoration: isDone ? 'line-through' : 'none',
                            color: selectTodoListPriorityColor(
                                priority,
                                todoTheme,
                            ),
                        }}
                    >
                        {text}
                    </Typography>
                </Grid>
            </ListItem>
        </Grid>
    );
};

export default TodoListCardItemElement;
