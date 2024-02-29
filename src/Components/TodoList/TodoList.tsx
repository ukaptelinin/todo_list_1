import { useContext, FC } from 'react';
import { TodosStateContext, TodoItem } from '../TodosStateContextProvider/context';
import useItemsToRender from './useItemsToRender';
import style from './TodoList.module.css';
import ListItem from './ListItem/ListItem';

const TodoList: FC = () => {
    const { itemsList, todoTypeRender } = useContext(TodosStateContext);
    const itemsToRender = useItemsToRender(todoTypeRender, itemsList);

    if (itemsList.length) {
        return (
            <ul className={style.list}>
                {itemsToRender.map((item: TodoItem) => (
                    <ListItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        );
    }
    return null;
};

export default TodoList;
