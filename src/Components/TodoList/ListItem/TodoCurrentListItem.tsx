import { FC, useRef } from 'react';
import { Grid, ListItem } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { TodoListItem, TodoListItemProps, TodoListStore } from '../../../Stores/TodoListStore';
import EditListItemInput from '../../EditListItemInput/EditListItemInput';
import useTodoListStore from '../../../Hooks/useTodoListStore';
import TodoListItemElement from './TodoListItemElement/TodoListItemElement';
import { useDrop } from 'react-dnd/dist/hooks/useDrop/useDrop';
import type { Identifier, XYCoord } from 'dnd-core';
import { useDrag } from 'react-dnd/dist/hooks/useDrag/useDrag';
import { DragItem } from '../../../constants';

const TodoCurrentListItem: FC<TodoListItemProps> = ({ id, text, isDone, priority, index, moveItem }) => {
    const todoListStore = useTodoListStore();
    const ref = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLButtonElement>(null);

    const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: 'ITEM',
    collect(monitor) {
        return {
            handlerId: monitor.getHandlerId(),
        };
    },
    hover(item: DragItem, monitor) {
        if (!ref.current) {
            return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
            return;
        }

        const hoverBoundingRect = ref.current?.getBoundingClientRect();

        const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        const clientOffset = monitor.getClientOffset();

        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        moveItem(dragIndex, hoverIndex);

        item.index = hoverIndex;
      },
  });

  const [{ isDragging }, drag, preview] = useDrag({
      type: 'ITEM',
      item: () => {
          return { id, index };
      },
      collect: (monitor: any) => ({
          isDragging: monitor.isDragging(),
      }),
    });

  const handlePointerDown = (event: React.PointerEvent) => {
      if (dragRef.current) {
          drag(dragRef.current);
      }
    };
  const opacity = isDragging ? 0 : 1;
      preview(drop(ref)); 

    return (
        <Grid container direction="row" ref={ref} sx={{opacity}}>   
            <ListItem sx={{ border: '1px solid silver', borderRadius: '5px', marginBottom: '5px' }}>
                {todoListStore.currentIdTodoListItem === id ? (
                    <Grid item xs={12}>
                        <EditListItemInput id={id} text={text} />
                    </Grid>
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
        </Grid>
    );
};

export default observer(TodoCurrentListItem);
