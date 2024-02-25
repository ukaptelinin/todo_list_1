import { useContext, FC } from 'react';
import { TodosStateContext } from '../TodosStateContextProvider/context';
import style from './TodoList.module.css';
import ListItem from './ListItem/ListItem';

const TodoList: FC = () => {
    const { itemsList } = useContext(TodosStateContext);
    if (itemsList.length) {
        return (
            <ul className={style.list}>
                {itemsList.map((item) => (
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
