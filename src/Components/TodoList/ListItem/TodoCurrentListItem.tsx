import { FC } from 'react';
import { Grid, ListItem } from '@mui/material';
import { observer } from 'mobx-react-lite';
import TodoListItemElement from './TodoListItemElement/TodoListItemElement';
import { TodoListItem } from '../../../Stores/TodoListStore';
import EditListItemInput from '../../EditListItemInput/EditListItemInput';
import useTodoListStore from '../../../Hooks/useTodoListStore';

const TodoCurrentListItem: FC<TodoListItem> = ({
    id, text, isDone, priority,
}) => {
    const todoListStore = useTodoListStore();

    return (
        <Grid container direction="row">
            <ListItem sx={{ borderBottom: '1px solid silver' }}>
                { todoListStore.currentIdTodoListItem === id
                    ? (
                        <Grid item xs={12}>
                            <EditListItemInput
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
                            priority={priority}
                        />
                    )}
            </ListItem>
        </Grid>
    );
};

export default observer(TodoCurrentListItem);
