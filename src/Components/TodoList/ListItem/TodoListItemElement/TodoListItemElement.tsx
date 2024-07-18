import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import TodoDeleteButton from '../../../TodoDeleteButton/TodoDeleteButton';
import TodoDoneToggle from '../../../TodoDoneToggle/TodoDoneToggle';
import useTodoListStore from '../../../../Hooks/useTodoListStore';
import { TodoListItem } from '../../../../Stores/TodoListStore';
import useTodoListItemColor from '../../useTodoListItemColor';

const TodoListItemElement: FC<TodoListItem> = ({
    id, text, isDone,
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
                <TodoDoneToggle id={id} isDone={isDone} />
            </Grid>
            <Grid item xs={9}>
                <Typography
                    variant="h4"
                    sx={{ textDecoration: isDone ? 'line-through' : 'none', color: useTodoListItemColor(id) }}
                    onDoubleClick={handleOnDoubleClick}
                >
                    {text}
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <TodoDeleteButton id={id} />
            </Grid>
        </>
    );
};
export default observer(TodoListItemElement);
