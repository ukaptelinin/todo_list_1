import { FC } from 'react';
import Container from '@mui/material/Container/Container';
import Paper from '@mui/material/Paper/Paper';
import TodoList from '../TodoList/TodoList';
import TodoPagination from '../TodoPagination/TodoPagination';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoListStateContext from '../TodosStateContext/TodoListStateContext';
import TodoHeader from '../TodoHeader/TodoHeader';
import ErrorPage from '../ErrorPage/ErrorPage';
import usePageTodoListStore from './usePageTodoListStore';
import { observer } from 'mobx-react-lite';

const TodoListPage: FC = () => {
    const pageTodoListStore = usePageTodoListStore();

    return (
        <TodoListStateContext.Provider value={pageTodoListStore}>
            <Container maxWidth="md" style={{ padding: '10px' }}>
                {pageTodoListStore ? (
                    <Paper sx={{ p: 2 }}>
                        <TodoHeader />
                        <TodoList />
                        {pageTodoListStore.itemList.length > 5 && (
                            <TodoPagination />
                        )}
                        <TodoFooter />
                    </Paper>
                ) : (
                    <ErrorPage
                        errorCode="404"
                        errorMessage="Todolist not found"
                    />
                )}
            </Container>
        </TodoListStateContext.Provider>
    );
};
export default observer(TodoListPage);
