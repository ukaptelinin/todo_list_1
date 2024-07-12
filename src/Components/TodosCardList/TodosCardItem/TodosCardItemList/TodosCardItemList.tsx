import { FC } from 'react';
import List from '@mui/material/List';
import { observer } from 'mobx-react-lite';
import useTodoListStore from '../../../../Hooks/useTodoListStore';
import { TodoListItem } from '../../../../Stores/TodoListStore';
import TodosCurrentCardListItem from './TodosCurrentCardListItem/TodosCurrentCardListItem';
import useItemsListToRender from './useItemsListToRender';

const TodosCardItemList: FC = () => {
    const itemsListToRender = useItemsListToRender();
    const todoListStore = useTodoListStore();

    if (todoListStore.itemList.length) {
        return (

            <List>
                {itemsListToRender.map((item: TodoListItem) => (
                    <TodosCurrentCardListItem
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
