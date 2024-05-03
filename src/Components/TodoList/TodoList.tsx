import { useContext, FC } from 'react';
import List from '@mui/material/List';
import TodoListItem from './ListItem/TodoListItem';
import { TodosStateContext, TodoItem } from '../TodosStateContextProvider/context';
import useItemsToRender from './useItemsToRender';

const TodoList: FC = () => {
    const { itemsList } = useContext(TodosStateContext);
    const itemsToRender = useItemsToRender();

    if (itemsList.length) {
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

export default TodoList;
