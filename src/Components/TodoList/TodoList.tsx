import { FC } from 'react';
import List from '@mui/material/List';
import { observer } from 'mobx-react-lite';
import TodoCurrentListItem from './ListItem/TodoCurrentListItem';
import { TodoListItem } from '../../Stores/TodoListStore';
import useTodoListStore from '../../Hooks/useTodoListStore';
import useItemsToRender from './useItemsToRender';

const TodoList: FC = () => {
    const itemsToRender = useItemsToRender();
    const todoListStore = useTodoListStore();

    if (todoListStore.itemList.length) {
        return (
            <List>
                {itemsToRender.map((item: TodoListItem) => (
                    <TodoCurrentListItem key={item.id} {...item} />
                ))}
            </List>
        );
    }
    return null;
};

export default observer(TodoList);
