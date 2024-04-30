import {
    useContext, FC,
} from 'react';
import {
    Grid, ListItem, Typography,
} from '@mui/material';
import TodoDeleteButton from '../../TodoDeleteButton/TodoDeleteButton';
import TodoDoneToggle from '../../TodoDoneToggle/TodoDoneToggle';
import TodoEditItemInput from '../../TodoEditItemInput/TodoEditItemInput';
import { TodoItem, TodosStateContext } from '../../TodosStateContextProvider/context';

const TodoListItem: FC<TodoItem> = ({
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
        <Grid container direction="row">
            <ListItem sx={{ borderBottom: '1px solid silver' }}>
                { currentIdTodoListItem === id
                    ? (
                        <Grid item xs={12}>
                            <TodoEditItemInput
                                id={id}
                                text={text}
                            />
                        </Grid>
                    ) : (
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
                    )}
            </ListItem>
        </Grid>
    );
};

export default TodoListItem;
