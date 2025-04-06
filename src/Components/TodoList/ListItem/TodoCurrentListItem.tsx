import { FC } from 'react';
import { Box, ListItem } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { TodoListItemProps } from '../../../Stores/TodoListStore';
import EditListItemInput from '../../EditListItemInput/EditListItemInput';
import useTodoListStore from '../../../Hooks/useTodoListStore';
import TodoListItemElement from './TodoListItemElement/TodoListItemElement';
import useDnD from './useDnD';

const TodoCurrentListItem: FC<TodoListItemProps> = ({
    id,
    text,
    isDone,
    priority,
    index,
    moveItem,
}) => {
    const todoListStore = useTodoListStore();
    const { drag, drop, preview, ref, dragRef, isDragging } = useDnD(
        id,
        index,
        moveItem,
    );

    const handlePointerDown = (event: React.PointerEvent) => {
        if (dragRef.current) {
            drag(dragRef.current);
        }
    };
    const opacity = isDragging ? 0.2 : 1;
    preview(drop(ref));

    return (
        <Box width="100%" ref={ref} sx={{ opacity }}>
            <ListItem
                sx={{
                    border: '1px solid silver',
                    borderRadius: '5px',
                    marginBottom: '5px',
                }}
            >
                {todoListStore.currentIdTodoListItem === id ? (
                    <EditListItemInput
                        id={id}
                        text={text}
                        priority={priority}
                    />
                ) : (
                    <TodoListItemElement
                        id={id}
                        text={text}
                        isDone={isDone}
                        priority={priority}
                        dragRef={dragRef}
                        onPointerDown={handlePointerDown}
                    />
                )}
            </ListItem>
        </Box>
    );
};

export default observer(TodoCurrentListItem);
