import { Box, Grid, IconButton, Typography } from '@mui/material';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import useTodoListStore from '../../../../Hooks/useTodoListStore';
import { TodoListItemElementProps } from '../../../../Stores/TodoListStore';
import DeleteListItemButton from '../../../DeleteListItemButton/DeleteListItemButton';
import ToggleTodoListItemDone from '../../../ToggleTodoListItemDone/ToggleTodoListItemDone';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import useTodosTheme from '../../../../Hooks/useTodoTheme';
import getTodoListPriorityColor from '../../../../utils/getTodoListPriorityColor';

const TodoListItemElement: FC<TodoListItemElementProps> = ({
    id,
    text,
    isDone,
    priority,
    dragRef,
    onPointerDown,
}) => {
    const todoListStore = useTodoListStore();
    const todoTheme = useTodosTheme();

    const handleOnDoubleClick = (): void => {
        if (id !== todoListStore.currentIdTodoListItem) {
            todoListStore.changeCurrentIdTodoListItem(id);
        }
    };

    return (
        <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={1}
        >
            <Box flexShrink={0}>
                <IconButton
                    ref={dragRef}
                    onPointerDown={onPointerDown}
                    disabled={todoListStore.todoRenderType !== 'ALL'}
                    sx={{ padding: 0 }}
                >
                    <DragIndicatorIcon sx={{ cursor: 'move' }} />
                </IconButton>
            </Box>
            <Box flexShrink={0}>
                <ToggleTodoListItemDone id={id} isDone={isDone} />
            </Box>
            <Box flexGrow={1} minWidth={0}>
                <Typography
                    sx={{
                        maxWidth: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: 20,
                        textDecoration: isDone ? 'line-through' : 'none',
                        color: getTodoListPriorityColor(priority, todoTheme),
                    }}
                    onDoubleClick={handleOnDoubleClick}
                >
                    {text}
                </Typography>
            </Box>
            <Box flexShrink={0}>
                <DeleteListItemButton id={id} />
            </Box>
        </Box>
    );
};

export default observer(TodoListItemElement);
