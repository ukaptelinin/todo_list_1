import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@mui/material/Grid/Grid';
import useTodosStore from '../../Hooks/useTodosStore';
import { TodoListStore } from '../../Stores/TodoListStore';
import TodosCardItem from './TodosCardItem/TodosCardItem';

const TodosCardList:FC = () => {
    const todosStore = useTodosStore();
    if (todosStore.todoListStores.length) {
        return (
            <Grid container spacing={2}>
                {todosStore.todoListStores.map((item:TodoListStore) => (
                    <Grid item xs={3}>
                        <TodosCardItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                        />
                    </Grid>
                ))}
            </Grid>
        );
    }
    return null;
};
export default observer(TodosCardList);
