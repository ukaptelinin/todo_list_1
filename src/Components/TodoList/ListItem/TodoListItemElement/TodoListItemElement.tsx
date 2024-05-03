import { Grid, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import TodoDeleteButton from '../../../TodoDeleteButton/TodoDeleteButton';
import TodoDoneToggle from '../../../TodoDoneToggle/TodoDoneToggle';
import { TodoItem, TodosStateContext } from '../../../TodosStateContextProvider/context';

const TodoListItemElement: FC<TodoItem> = ({
    id, text, isDone,
}) => {
    const {
        currentIdTodoListItem,
        changeCurrentIdTodoListItem,
    } = useContext(TodosStateContext);

    const handleOnDoubleClick = (): void => {
        if (id !== currentIdTodoListItem) {
            changeCurrentIdTodoListItem(id);
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
                    sx={{ textDecoration: isDone ? 'line-through' : 'none' }}
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
export default TodoListItemElement;
