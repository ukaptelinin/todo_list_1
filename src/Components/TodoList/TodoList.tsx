import { FC } from 'react';
import List from '@mui/material/List';
import { observer } from 'mobx-react-lite';
import TodoCurrentListItem from './ListItem/TodoCurrentListItem';
import { TodoListItem } from '../../Stores/TodoListStore';
import useTodoListStore from '../../Hooks/useTodoListStore';
import useItemsToRender from './useItemsToRender';
import { DndProvider } from 'react-dnd/dist/core/DndProvider';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TodoList: FC = () => {
    const itemsToRender = useItemsToRender();
    const todoListStore = useTodoListStore();

    if (todoListStore.itemList.length) {
        return (
            <DndProvider backend={HTML5Backend}>
                <List className="DarkColor">
                    {itemsToRender.map((item: TodoListItem, index: number) => (
                        <TodoCurrentListItem
                            key={item.id}
                            {...item}
                            index={index}
                            moveItem={todoListStore.moveItem}
                        />
                    ))}
                </List>
            </DndProvider>
        );
    }
    return null;
};

export default observer(TodoList);
