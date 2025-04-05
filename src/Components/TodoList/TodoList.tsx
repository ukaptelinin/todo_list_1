import { FC } from 'react';
import List from '@mui/material/List';
import { observer } from 'mobx-react-lite';
import TodoCurrentListItem from './ListItem/TodoCurrentListItem';
import { TodoListItem } from '../../Stores/TodoListStore';
import useTodoListStore from '../../Hooks/useTodoListStore';
import useItemsToRender from './useItemsToRender';
import { DndProvider } from 'react-dnd/dist/core/DndProvider';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ListItem } from '@mui/material';
import TodoInput from '../TodoInput/TodoInput';

const TodoList: FC = () => {
    const itemsToRender = useItemsToRender();
    const todoListStore = useTodoListStore();

    return (
        <DndProvider backend={HTML5Backend}>
            <TodoInput />
            <List>
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
};

export default observer(TodoList);
