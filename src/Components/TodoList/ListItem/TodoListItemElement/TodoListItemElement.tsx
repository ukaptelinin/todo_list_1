import { Grid, IconButton, Typography } from '@mui/material';
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
        <>
            <Grid item xs={1}>
                <IconButton
                    ref={dragRef}
                    onPointerDown={onPointerDown}
                    disabled={todoListStore.todoRenderType !== 'ALL'}
                >
                    <DragIndicatorIcon
                        sx={{ color: 'brown', cursor: 'move' }}
                    />
                </IconButton>
            </Grid>
            <Grid item xs={2}>
                <ToggleTodoListItemDone id={id} isDone={isDone} />
            </Grid>
            <Grid item xs={8}>
                <Typography
                    variant="h4"
                    sx={{
                        textDecoration: isDone ? 'line-through' : 'none',
                        color: getTodoListPriorityColor(priority, todoTheme),
                    }}
                    onDoubleClick={handleOnDoubleClick}
                >
                    {text}
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <DeleteListItemButton id={id} />
            </Grid>
        </>
    );
};

export default observer(TodoListItemElement);
