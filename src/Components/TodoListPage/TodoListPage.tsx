import { FC } from 'react';
import Container from '@mui/material/Container/Container';
import Paper from '@mui/material/Paper/Paper';
import Stack from '@mui/material/Stack/Stack';
import Button from '@mui/material/Button/Button';
import { Link } from 'react-router-dom';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import TodoPagination from '../TodoPagination/TodoPagination';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoListStateContext from '../TodosStateContext/TodoListStateContext';
import TodoHeader from '../TodoHeader/TodoHeader';
import ErrorPage from '../ErrorPage/ErrorPage';
import { MAIN_PATH } from '../../constants';
import usePageTodoListStore from './usePageTodoListStore';

const TodoListPage: FC = () => {
    const pageTodoListStore = usePageTodoListStore();

    return (
        <TodoListStateContext.Provider value={pageTodoListStore}>
            <Container maxWidth="sm" style={{ padding: '10px' }}>
                {pageTodoListStore ? (
                    <Paper>
                        <TodoHeader />
                        <TodoInput />
                        <TodoList />
                        <TodoPagination />
                        <TodoFooter />
                    </Paper>
                ) : (
                    <ErrorPage
                        errorCode="404"
                        errorMessage="Todolist not found"
                    />
                )}
                <Stack direction="row" alignItems="right">
                    <Button variant="outlined" style={{ marginRight: '5px' }}>
                        <Link
                            to={MAIN_PATH}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            CLOSE
                        </Link>
                    </Button>
                </Stack>
            </Container>
        </TodoListStateContext.Provider>
    );
};
export default TodoListPage;
