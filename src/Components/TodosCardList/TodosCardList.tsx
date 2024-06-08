import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@mui/material/Grid/Grid';
import TodosCardItem from './TodosCardItem/TodosCardItem';
import useTodosStore from '../../Hooks/useTodosStore';
import { TodoListStore } from '../../Stores/TodoListStore';

const TodosCardList:FC = () => {
    const todosStore = useTodosStore();
    if (todosStore.todoListStores.length) {
        return (
            <Grid container spacing={2}>
                {todosStore.todoListStores.map((item:TodoListStore) => (
                    <Grid item xs={3}>
                        <TodosCardItem
                            key={item.id}
                            {...item}
                        />
                    </Grid>
                ))}
            </Grid>
        );
    }
    return null;
};
export default observer(TodosCardList);
