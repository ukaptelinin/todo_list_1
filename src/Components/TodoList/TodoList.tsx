import { useContext, FC } from 'react';
import { TodosStateContext, TodoItem, TodoRenderType } from '../TodosStateContextProvider/context';
import style from './TodoList.module.css';
import ListItem from './ListItem/ListItem';

const TodoList: FC = () => {
    const { itemsList, todoTypeRender } = useContext(TodosStateContext);

    const useItemsToRender = (type: TodoRenderType, list: TodoItem[]): TodoItem[] => {
        switch (type) {
        case 'ACTIVE':
            return list.filter((item) => !item.isDone);
        case 'COMPLETED':
            return list.filter((item) => item.isDone);
        default:
            return list;
        }
    };

    const itemsToRender = useItemsToRender(todoTypeRender, itemsList);

    if (itemsList.length) {
        return (
            <ul className={style.list}>
                {itemsToRender.map((item) => (
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
