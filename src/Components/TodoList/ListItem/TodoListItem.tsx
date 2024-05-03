import {
    useContext, FC,
} from 'react';
import {
    Grid, ListItem,
} from '@mui/material';

import TodoEditItemInput from '../../TodoEditItemInput/TodoEditItemInput';
import { TodoItem, TodosStateContext } from '../../TodosStateContextProvider/context';
import TodoListItemElement from './TodoListItemElement/TodoListItemElement';

const TodoListItem: FC<TodoItem> = ({
    id, text, isDone,
}) => {
    const {
        currentIdTodoListItem,
    } = useContext(TodosStateContext);

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
                    )
                    : (
                        <TodoListItemElement
                            id={id}
                            text={text}
                            isDone={isDone}
                        />
                    )}
            </ListItem>
        </Grid>
    );
};

export default TodoListItem;
