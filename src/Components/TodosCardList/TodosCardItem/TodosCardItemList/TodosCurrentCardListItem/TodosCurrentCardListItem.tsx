import { FC } from 'react';
import { Grid, ListItem } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { TodoListItem } from '../../../../../Stores/TodoListStore';
import TodoListCardItemElement from './TodoListCardItemElement/TodoListCardItemElement';

const TodoCurrentCardListItem: FC<TodoListItem> = ({
    id, text, isDone,
}) => (
    <Grid container direction="row">
        <ListItem sx={{ borderBottom: '1px solid silver' }}>

            <TodoListCardItemElement
                id={id}
                text={text}
                isDone={isDone}
            />

        </ListItem>
    </Grid>
);

export default observer(TodoCurrentCardListItem);
