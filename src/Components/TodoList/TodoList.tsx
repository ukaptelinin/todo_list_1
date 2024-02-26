import { useContext, FC } from 'react';
import { TodosStateContext, TodoItem } from '../TodosStateContextProvider/context';
import style from './TodoList.module.css';
import ListItem from './ListItem/ListItem';

const TodoList: FC = () => {
    const { itemsList, todoTypeRender } = useContext(TodosStateContext);
    let todoListCopy: TodoItem[] = [];

    switch (todoTypeRender) {
    case 'ALL':
        todoListCopy = itemsList.slice();
        break;
    case 'ACTIVE':
        todoListCopy = itemsList.filter((item) => !item.isDone);
        break;
    case 'COMPLETED':
        todoListCopy = itemsList.filter((item) => item.isDone);
        break;
    default:
        console.log('error');
    }
    if (itemsList.length) {
        return (
            <ul className={style.list}>
                {todoListCopy.map((item) => (
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
