import { FC } from 'react';
import List from '@mui/material/List';
import { observer } from 'mobx-react-lite';
import useTodoListStore from '../../../../Hooks/useTodoListStore';
import { TodoListItem } from '../../../../Stores/TodoListStore';
import useItemsListToRender from './useItemsListToRender';
import TodoListCardItemElement from './TodoListCardItemElement/TodoListCardItemElement';

const TodosCardItemList: FC = () => {
    const itemsListToRender = useItemsListToRender();
    const todoListStore = useTodoListStore();

    if (todoListStore.itemList.length) {
        return (

            <List>
                {itemsListToRender.map((item: TodoListItem) => (
                    <TodoListCardItemElement
                        key={item.id}
                        {...item}
                    />
                ))}
            </List>

        );
    }
    return null;
};

export default observer(TodosCardItemList);
