import { FC } from 'react';
import { Grid, ListItem } from '@mui/material';
import { observer } from 'mobx-react-lite';
import TodoEditItemInput from '../../TodoEditItemInput/TodoEditItemInput';
import TodoListItemElement from './TodoListItemElement/TodoListItemElement';
import { TodoItem } from '../../../Stores/store';
import useTodoListStore from '../../../Hooks/useTodoListStore';

const TodoListItem: FC<TodoItem> = ({
    id, text, isDone,
}) => {
    const todoListStore = useTodoListStore();
    return (
        <Grid container direction="row">
            <ListItem sx={{ borderBottom: '1px solid silver' }}>
                { todoListStore.currentIdTodoListItem === id
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

export default observer(TodoListItem);
