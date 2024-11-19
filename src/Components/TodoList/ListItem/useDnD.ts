import { useRef } from "react";
import useTodoListStore from "../../../Hooks/useTodoListStore";
import { useDrop } from "react-dnd/dist/hooks/useDrop/useDrop";
import { useDrag } from "react-dnd/dist/hooks/useDrag/useDrag";
import type { Identifier, XYCoord } from 'dnd-core';
import { ConnectDragPreview, ConnectDragSource, ConnectDropTarget } from "react-dnd";



    type UseDnDReturn = {
        drag: ConnectDragSource;
        drop: ConnectDropTarget;
        preview: ConnectDragPreview;
        ref: React.RefObject<HTMLDivElement>;
        dragRef: React.RefObject<HTMLButtonElement>;
        isDragging: any;
    };
    
    const useDnD = (id:number, index:number, moveItem: (dragIndex: number, hoverIndex: number) => void): UseDnDReturn => {
    interface DragItem {
        index: number;
      }

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

    return { drag, drop, preview, ref, dragRef,isDragging };
};

export default useDnD;