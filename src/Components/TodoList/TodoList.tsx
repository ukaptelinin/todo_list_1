import { FC } from 'react';
import List from '@mui/material/List';
import { observer } from 'mobx-react-lite';
import TodoListItem from './ListItem/TodoListItem';
import itemListStore, { TodoItem } from '../../Stores/store';
import useItemsToRender from './useItemsToRender';

const TodoList: FC = () => {
   

    const itemsToRender = useItemsToRender();

    if (itemListStore.itemList.length) {
        return (
            <List>
                {itemsToRender.map((item: TodoItem) => (
                    <TodoListItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </List>
        );
    }
    return null;
};

export default observer(TodoList);
