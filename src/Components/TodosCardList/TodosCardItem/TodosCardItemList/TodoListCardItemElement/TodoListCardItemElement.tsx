import { FC } from 'react';
import { Box, ListItem, Typography } from '@mui/material';
import { TodoListItem } from '../../../../../Stores/TodoListStore';
import ToggleTodoListItemDone from '../../../../ToggleTodoListItemDone/ToggleTodoListItemDone';
import useTodosTheme from '../../../../../Hooks/useTodoTheme';
import getTodoListPriorityColor from '../../../../../utils/getTodoListPriorityColor';

const TodoListCardItemElement: FC<TodoListItem> = ({
    id,
    text,
    isDone,
    priority,
}) => {
    const todoTheme = useTodosTheme();

    return (
        <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <ListItem sx={{ borderBottom: '1px solid silver', px: 0 }}>
                <Box flexShrink={0}>
                    <ToggleTodoListItemDone id={id} isDone={isDone} />
                </Box>
                <Box flexGrow={2} minWidth={0}>
                    <Typography
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize: 20,
                            textDecoration: isDone ? 'line-through' : 'none',
                            color: getTodoListPriorityColor(
                                priority,
                                todoTheme,
                            ),
                        }}
                    >
                        {text}
                    </Typography>
                </Box>
            </ListItem>
        </Box>
    );
};

export default TodoListCardItemElement;
