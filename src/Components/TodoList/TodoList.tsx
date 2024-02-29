import { useContext, FC } from 'react';
import { TodosStateContext, TodoItem, TodoRenderType } from '../TodosStateContextProvider/context';
import style from './TodoList.module.css';
import ListItem from './ListItem/ListItem';

const TodoList: FC = () => {
    const { itemsList, todoTypeRender } = useContext(TodosStateContext);

    const useItemsToRender = (type: TodoRenderType, list: TodoItem[]): TodoItem[]=> {
        switch (type) {
        case 'ACTIVE':
            return list.filter((item) => !item.isDone);
        case 'COMPLETED':
            return list.filter((item) => item.isDone);
        default:
            return list;
        }
    };

    if (itemsList.length) {
        return (
            <ul className={style.list}>
                {useItemsToRender(todoTypeRender, itemsList).map((item) => (
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
